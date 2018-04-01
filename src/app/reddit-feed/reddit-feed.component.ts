import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {RedditPostData, RedditPostList} from "../Models";

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.scss']
})
export class RedditFeedComponent implements OnInit {

  private _reddits$: Observable<RedditPostData[]>;
  private _redditDataUrl: string = 'http://www.reddit.com/r/9gag.json';
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    console.log('hel.lo');
    this._initFeed();
    this._logFeed();
  }

  private _initFeed() {
    this._reddits$ = this._http.get<RedditPostList>(this._redditDataUrl)
      .map((json) => json.data.children)
      .map(children => children.filter(d => (
        ['png', 'jpg'].indexOf(d.data.url.split('.').pop()) != -1
      )))
      .map(children => children.map(d => {
        return {
          id: d.data.id,
          title: d.data.title,
          imageUrl: d.data.url
        }
      }));
      // .map((response:any) => response.json());
  }
  private _logFeed() {
    console.log('hel.lo');
    console.log('hel.lo');
    this._reddits$.subscribe((data )=> {
      console.log('data', data);
    });
  }

}
