import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RedditPostData, RedditPostList} from "../../Models";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";
import * as fromPost from "../store/post.reducer";
import * as fromPostActions from "../store/post.action";
import {GlobalAppState} from "../../store/app.reducers";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  private _reddits$: Observable<RedditPostData[]>;
  private testRedditPostDataArray: RedditPostData[];
  private _redditDataUrl: string = 'http://www.reddit.com/r/9gag.json';
  constructor(private _http:HttpClient, private store:Store<GlobalAppState>) { }

  ngOnInit() {

    this.store.dispatch(new fromPostActions.BeginGetPosts({url: this._redditDataUrl}));
    this._reddits$ =
      this.store.select('post')
      .map((value:{ postData:RedditPostData[]})=>{
        return value?value.postData:[];
      })
      // .subscribe((value: { postState:RedditPostData[]})=>{
      //   this.testRedditPostDataArray = (value && value.postState)?value.postState:[];
      // })

  }
}
