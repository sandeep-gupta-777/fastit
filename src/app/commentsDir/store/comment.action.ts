import {Action} from "@ngrx/store";
import {CommentData, CommentDataWrapper, RedditPostData, RedditPostWrapper} from "../../Models";

export const BEGIN_GET_COMMENTS = 'BEGIN_GET_COMMENTS';
export const GET_COMMENTS = 'GET_COMMENTS';

export class BeginGetComments implements Action{
  type: string = BEGIN_GET_COMMENTS;
  constructor(public payload:{url:string} ){}
}
export class GetComments implements Action{
  type: string = GET_COMMENTS;
  constructor(public payload:{commentData:CommentData[]} ){}
}

export type CommentActions = BeginGetComments | GetComments;
