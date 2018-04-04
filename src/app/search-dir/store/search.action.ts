import {Action} from "@ngrx/store";
import {SubRedditData, SubRedditResultList} from "../../Models";

export const BEGIN_GET_RESULTS = 'BEGIN_GET_RESULTS';
export const GET_RESULTS = 'GET_RESULTS';

export class BeginGetResults implements Action{
  type: string = BEGIN_GET_RESULTS;
  constructor(public payload:{url:String} ){}
}
export class GetResults implements Action{
  type: string = GET_RESULTS;
  constructor(public payload:{data:SubRedditData[]} ){}
}

export type ResultActions = BeginGetResults | GetResults;


