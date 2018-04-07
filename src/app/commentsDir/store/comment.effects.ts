import {Actions, Effect} from "@ngrx/effects";
import * as fromCommentActions from "./comment.action";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {HelperService} from "../../helper.service";
import {CommentData, CommentDataWrapper, RedditCommentResult,} from "../../Models";
import {ContentChild, Injectable} from "@angular/core";
import 'rxjs/add/operator/concatMap'
import * as fromCommentReducer from "./commentReducer";

@Injectable()
export class CommentEffects{

  constructor(
    private action$:Actions,
    private helper:HelperService
  ){}

  @Effect()
  commentEffect = this.action$
    .ofType(fromCommentActions.BEGIN_GET_COMMENTS)
    .map((action:fromCommentActions.BeginGetComments)=>{//observable will resolve to Dispatched Object
      console.log('BEGIN get comment : effects');
        return action.payload.url;
    })
    .mergeMap((url:string)=>{
      return this.helper.makeGetReq<RedditCommentResult[]>(url);
    })
    .map((data: RedditCommentResult[])=>{

      //get the id
      let id = (<any>data[0]).data.children[0].data.id;
      let newArr:CommentData[];
      console.log('comment from server: ',data);

      //get the comment array
      data.splice(0,1);
      // data.splice(1,1);
      if(data.length>0)
      {
        newArr =  data[0].data.children.map((d:CommentDataWrapper)=>{
          return d.data;
        });
      }
      newArr.pop();//TODO: make use of this data, rather than deleting it
      //make map with id and array and return
      let tempMap = new Map<string,CommentData[]>();
      tempMap.set(id,newArr);
      return tempMap;

    })
    .mergeMap((data: Map<string,CommentData[]>)=>{
      console.log(data);
      return [
        new fromCommentActions.GetComments({map:data}),
      ];
    })

}


