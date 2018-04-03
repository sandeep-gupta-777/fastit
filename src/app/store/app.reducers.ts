
import * as fromPost from '../postDir/store/post.reducer';
import {ActionReducerMap} from "@ngrx/store";

export interface GlobalAppState{
  post: fromPost.State
}

export const reducers : ActionReducerMap<GlobalAppState> = {
 post: fromPost.postReducer
};
