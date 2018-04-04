import {RedditPostData, SubRedditData, SubRedditResultList} from "../../Models";
import * as fromResultsActions from './search.action';

export interface State {
  resultsData:SubRedditData[]
}

const initialState:State={
  resultsData:[]
};

export function searchReducer(state:State, action:fromResultsActions.ResultActions): State {
  console.log('in search Reducer');
  switch (action.type){
    case fromResultsActions.BEGIN_GET_RESULTS:{

      return{
        ...state,
      }
    }
    case fromResultsActions.GET_RESULTS:{
      return{
        ...state,
        resultsData: ((<fromResultsActions.GetResults>action).payload.data)
      }
    }
  }
}
