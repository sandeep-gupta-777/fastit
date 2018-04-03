import {Action} from "@ngrx/store";
import {RedditPostData} from "../../Models";

export const BEGIN_GET_POST = 'BEGIN_GET_POST';
export const GET_POST = 'GET_POST';

export class BeginGetPosts implements Action{
  type: string = BEGIN_GET_POST;
  constructor(public payload:{url:String} ){}
}
export class GetPosts implements Action{
  type: string = GET_POST;
  constructor(public payload:{postData:RedditPostData} ){}
}


export type PostActions = BeginGetPosts | GetPosts;
