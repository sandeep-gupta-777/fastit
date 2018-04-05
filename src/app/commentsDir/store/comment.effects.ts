import {Actions, Effect} from "@ngrx/effects";
import * as fromCommentActions from "./comment.action";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {HelperService} from "../../helper.service";
import {CommentData, CommentDataWrapper, RedditCommentResult,} from "../../Models";
import {ContentChild, Injectable} from "@angular/core";

@Injectable()
export class CommentEffects{

  constructor(
    private action$:Actions,
    private helper:HelperService
  ){}

  @Effect()
  postEffect = this.action$
    .ofType(fromCommentActions.BEGIN_GET_COMMENTS)
    .map((action:fromCommentActions.BeginGetComments)=>{
        return action.payload.url;
    })
    .switchMap((url:string)=>{
      return this.helper.makeGetReq(url);
    })
    .map((data: RedditCommentResult[])=>{
      // return data.data.children;
      // let x =  data.filter((d, index)=>{
      //   return index!==0;
      // });

      data.splice(0,1);
      if(data.length>0)
      return data[0].data.children.map((d:CommentDataWrapper)=>{
        return d.data;
      });

      return [];
    })
    .mergeMap((data: CommentData[])=>{
      console.log(data);
      return [
        new fromCommentActions.GetComments({commentData:data}),
      ];
    })
}


