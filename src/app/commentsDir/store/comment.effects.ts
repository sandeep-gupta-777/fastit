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

      //get the post_id
      let id = (<any>data[0]).data.children[0].data.id;
      let newArr:CommentData[];
      console.log('comment from server: ',data);

      //get the comment array
      data.splice(0,1);
      if((<any>data[0]).data.children[(<any>data[0]).data.children.length-1].kind === 'more'){
        (<any>data[0]).data.children.pop();
      }
      // data.splice(1,1);
      if(data.length>0)
      {
        newArr =  data[0].data.children.map((d:CommentDataWrapper)=>{
          return d.data;
        });
      }

      //make map with post_id and array and return
      // let tempMap = new Map<string,CommentData[]>();
      // tempMap.set(post_id,newArr);
      return {post_id:id, commentsData:newArr};
    })
    .map((data: {post_id:string, commentsData:CommentData[]})=>{
      /*do data transformations here*/
      return data;
    })
    .mergeMap((data: {post_id:string, commentsData:CommentData[]})=>{
      console.log(data);
      return [
        new fromCommentActions.GetComments({post_id:data.post_id, commentsData:data.commentsData}),
      ];
    })

}


