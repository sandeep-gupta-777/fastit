import {CommentData, CommentDataWrapper} from "../../Models";
import * as fromCommentActions from './comment.action';
import 'map.prototype.tojson';

export interface State {
    // comments: Array<{post_id?:string, comment?:CommentData[]}>
  /*todo: remove redundant comment key...read about map interfaces in TS*/

  /**
   * post_comments_index_map: post_id is mapped to an array which will have all comments post_id.
   * This array will be sorted in order of child parent hierarchy
   * This sorting should be maintained everytime post_comments_index_map is updated.
   * Ex: Every time a new post comes, do this:
   * 1. Update the comment array in post_comments_index_map by adding the new comment index below their parent index
   * 2. update the comment in commentMap
   * */
    post_comments_index_map: Map<string,string[]>,

  /**
   * commentMap: A simple mapping of all comment_ids to comment Data
   * {post_id:p1, {comment_id:c3, comment:{...}}}
   * */
    post_commentData_map:Map<string, Map<string, CommentData>>,
}

const initialState:State={
  post_comments_index_map:new Map<string, string[]>(),
  post_commentData_map:new Map([['post_id', new Map([['comment_id',{}]])]])
};

export function commentReducer(state:State, action:fromCommentActions.CommentActions): State {
  if(!state) state = initialState;
  let tempState = state;
  console.log('comment reducer');
  switch (action.type){
    case fromCommentActions.BEGIN_GET_COMMENTS:{
      console.log('begin get comments reducer');
      return{
        ...state,
      }
    }
    case fromCommentActions.GET_COMMENTS:{
      let tempPayload  = (<fromCommentActions.GetComments>action).payload;
      let post_id:string = tempPayload.post_id;
      // let newComment_index_arr = tempPayload.comment_index_arr;
      let additonalCommentsData:CommentData[] = tempPayload.commentsData;
      let additonalCommentsDataMap:Map<string, CommentData>=
        /*creates a mapping of commend post_id and comment*/
        new Map<string, CommentData>(
          additonalCommentsData.map((commentData): [string, CommentData] => {
          return [commentData.id, commentData]
        }));
      let newAdditional_Post_CommentDataMap_Map:Map<string, Map<string, CommentData>>
      = new Map<string, Map<string, CommentData>>([[post_id, additonalCommentsDataMap]]);

      /*
      * 1. replace comment index array for the give post post_id with the new one
      * 2. push new commentsData array to existing commentsDats array
      * */

      /*if old_comments_index_array exists, update it. Otherwise create new_comment_index_array*/
      let old_comments_index_array:string[] = state.post_comments_index_map.get(post_id);
      let new_comment_index_array:string[];
      if(old_comments_index_array) {
        let new_comments_index_array = additonalCommentsData.forEach((commentData, index) => {
          let parent_index = old_comments_index_array.indexOf(commentData.parent_id);
          if (parent_index !== -1) {
            old_comments_index_array.splice(parent_index + 1, 0, commentData.id);
          }
        });
      }
      else {
        /*meaning its first level comment*/
        new_comment_index_array = additonalCommentsData.map((value)=> value.id);
      }

      return {
        ...state,
        // comments:new Map<string, CommentData[]>([...state.comments,...tempPayload.map])
        post_comments_index_map:
          new Map<string, string[]>([...state.post_comments_index_map,[post_id, (old_comments_index_array || new_comment_index_array)]]),
        post_commentData_map:
          new Map<string, Map<string, CommentData>>
          ([ ...state.post_commentData_map, ...newAdditional_Post_CommentDataMap_Map])
      };
    }
    default:
      return state;
  }
}
