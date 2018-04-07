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
        return d.data;
      });


    // .map(children => children.filter(d => (
    //     ['png', 'jpg'].indexOf(d.data.url.split('.').pop()) != -1
    //   )))
      return x;
      // return data.data.children
    })
    .map((data: RedditPostData[])=>{
      return data.map(d => {
        if (['png', 'jpg'].indexOf(d.url.split('.').pop()) != 1) {
          d.imageExists = false;
        }
        return d;
      })
    })
    .mergeMap((data: RedditPostData[])=>{
      return [
        new fromPostAction.GetPosts({postData:data}),
      ];
    })
}


