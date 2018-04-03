import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RedditPostData, RedditPostList} from "../../Models";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";
import * as fromPost from "../store/post.reducer";
import * as fromPostActions from "../store/post.action";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  private _reddits$: Observable<RedditPostData[]>;
  private _redditDataUrl: string = 'http://www.reddit.com/r/9gag.json';
  constructor(private _http:HttpClient, private store:Store<fromPost.State>) { }

  ngOnInit() {
    this.store.dispatch(new fromPostActions.BeginGetPosts({url: this._redditDataUrl}));
    // this._initFeed();
    // this._logFeed();
  }

  // private _initFeed() {
  //   this._reddits$ = this._http.get<RedditPostList>(this._redditDataUrl)
  //     .map((json) => json.data.children)
  //     .map(children => children.filter(d => (
  //       ['png', 'jpg'].indexOf(d.data.url.split('.').pop()) != -1
  //     )))
  //     .map(children => children.map(d => {
  //       // return {
  //       //   id: d.data.id,
  //       //   title: d.data.title,
  //       //   imageUrl: d.data.url
  //       // }
  //
  //       return d.data;
  //     }));
  //   // .map((response:any) => response.json());
  // }
  // private _logFeed() {
  //
  //   this._reddits$.subscribe((data )=> {
  //     console.log('data', data);
  //   });
  // }

}
