import {CommentData, CommentDataWrapper} from "../../Models";
import * as fromCommentActions from './comment.action';
import 'map.prototype.tojson';

export interface State {
    // commentsMap: Array<{id?:string, commentData?:CommentData[]}>
  /*todo: remove redundant comment key...read about map interfaces in TS*/
    commentsMap: Map<string,CommentData[]>
}

const initialState:State={
  commentsMap:new  Map<string,CommentData[]>()
};

export function commentReducer(state:State, action:fromCommentActions.CommentActions): State {
  if(!state) state = initialState;
  let tempState = state;
  console.log('comment reducer');
  switch (action.type){
    case fromCommentActions.BEGIN_GET_COMMENTS:{
      console.log('begin get commentsMap reducer');
      return{
        ...state,
      }
    }
    case fromCommentActions.GET_COMMENTS:{
      let tempPayload  = (<fromCommentActions.GetComments>action).payload;
      return {
        ...state,
        commentsMap:new Map<string, CommentData[]>([...state.commentsMap,...tempPayload.map])
      };
    }
    default:
      return state;
  }
}
