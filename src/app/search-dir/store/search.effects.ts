import {Actions, Effect} from "@ngrx/effects";
import * as fromResultsAction from "./search.action";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {HelperService} from "../../helper.service";
import {RedditPostData, RedditPostWrapper, SubRedditData, SubRedditResultList} from "../../Models";
import {Injectable} from "@angular/core";

@Injectable()
export class SearchEffects{

  constructor(
    private action$:Actions,
    private helper:HelperService
  ){}

  @Effect()
  postEffect = this.action$
    .ofType(fromResultsAction.BEGIN_GET_RESULTS)
    .map((action:fromResultsAction.BeginGetResults)=>{
        return action.payload.url;
    })
    .switchMap((url:string)=>{
      return this.helper.makeGetReq(url);
    })
    .map((data: SubRedditResultList)=>{
      // console.log(data);
      let arr =  data.data.children.map((child)=>{
        return child.data
      });
      console.log('in search.effects: reslts from server', arr);
      return arr;
    })
    .mergeMap((data: SubRedditData[])=>{
      return [
        new fromResultsAction.GetResults({data:data}),
      ];
    })
}


