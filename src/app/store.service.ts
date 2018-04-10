import {Injectable, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalAppState} from "./store/app.reducers";
import {CommentData} from "./Models";
import * as fromComment from "./commentsDir/store/commentReducer";
import * as fromSearch from "./search-dir/store/search.reducer";
import * as fromPost from "./postDir/store/post.reducer";

/*this service will represent the GlobalAppState and will be used by component to query global app state*/

@Injectable()
export class StoreService {

  postState:fromPost.State;
  searchState:fromSearch.State;
  commentState:fromComment.State;
  constructor(private store:Store<GlobalAppState>) { this.ngOnInit();}

  ngOnInit(): void {
    this.store.subscribe((value:GlobalAppState)=>{
      this.postState = value.post;
      this.searchState= value.search;
      this.commentState = value.comment;
    })
  }

  getCommentIndexBy_postID(post_id):string[]{
    return this.commentState.post_comments_index_map.get(post_id);
  }
  getCommentByID(post_id,comment_id):CommentData{
    let commentsMap:Map<string, CommentData> = this.commentState.post_commentData_map.get(post_id);
    return commentsMap.get(comment_id);
  }

}
