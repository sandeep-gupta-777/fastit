import {Actions, Effect} from "@ngrx/effects";
import * as fromPostAction from "./post.action";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {HelperService} from "../../helper.service";
import {RedditPostData, RedditPostList, RedditPostWrapper} from "../../Models";
import {Injectable} from "@angular/core";

@Injectable()
export class PostEffects{

  constructor(
    private action$:Actions,
    private helper:HelperService
  ){}

  @Effect()
  postEffect = this.action$
    .ofType(fromPostAction.BEGIN_GET_POST)
    .map((action:fromPostAction.BeginGetPosts)=>{
        return action.payload.url;
    })
    .switchMap((url:string)=>{
      return this.helper.makeGetReq(url);
    })
    .map((data: RedditPostList)=>{
      console.log(data);
      let x =  data.data.children.map((d)=>{
        return d.data
      });
      console.log(x);
      return x;
    })
    .mergeMap((data: RedditPostData[])=>{
      console.log(data);
      return [
        new fromPostAction.GetPosts({postData:data}),
      ];
    })
}


