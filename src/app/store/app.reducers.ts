
import * as fromPost from '../postDir/store/post.reducer';
import {ActionReducerMap} from "@ngrx/store";
import * as fromSearch from "../search-dir/store/search.reducer";

export interface GlobalAppState{
  post: fromPost.State,
  search:fromSearch.State
}

export const reducers : ActionReducerMap<GlobalAppState> = {
 post: fromPost.postReducer,
  search:fromSearch.searchReducer
};

