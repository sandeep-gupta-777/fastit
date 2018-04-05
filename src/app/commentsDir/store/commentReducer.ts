import {CommentData, CommentDataWrapper} from "../../Models";
import * as fromCommentActions from './comment.action';



export interface State {
  commentData:CommentData[]
}

const initialState:State={
  commentData:[]
};

export function commentReducer(state:State=initialState, action:fromCommentActions.CommentActions): State {
  console.log('comment reducer');
  switch (action.type){
    case fromCommentActions.BEGIN_GET_COMMENTS:{
      return{
        ...state,
      }
    }
    case fromCommentActions.GET_COMMENTS:{
      console.log('GET COMMENT REDUCER');
      return{
        ...state,
        commentData: ((<fromCommentActions.GetComments>action).payload.commentData)
      }
    }
  }
}
