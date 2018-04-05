
import * as fromPost from '../postDir/store/post.reducer';
import {ActionReducerMap} from "@ngrx/store";
import * as fromSearch from "../search-dir/store/search.reducer";
import * as fromComment from "../commentsDir/store/commentReducer";

export interface GlobalAppState{
  post: fromPost.State,
  search:fromSearch.State,
  comment:fromComment.State
}

export const reducers : ActionReducerMap<GlobalAppState> = {
 post: fromPost.postReducer,
  search:fromSearch.searchReducer,
  comment:fromComment.commentReducer
};

