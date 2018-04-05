import {RedditPostData, RedditPostWrapper} from "../../Models";
import * as fromPostActions from './post.action';



export interface State {
  postData:RedditPostData[]
}

const initialState:State={
  postData:[]
};

export function postReducer(state:State=initialState, action:fromPostActions.PostActions): State {
  switch (action.type){
    case fromPostActions.BEGIN_GET_POST:{
      return{
        ...state,
      }
    }
    case fromPostActions.GET_POST:{
      return{
        ...state,
        postData: ((<fromPostActions.GetPosts>action).payload.postData)
      }
    }
  }
}
