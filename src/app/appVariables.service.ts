import {Injectable} from '@angular/core';

@Injectable()
export class AppVariablesService {

  constructor() {
  }

  public readonly REDDIT_ROOT = 'http://www.reddit.com';
  /*"https://www.reddit.com/search.json?q=india&sort=relevance&t=all".*/
  /*"http://www.reddit.com/r/worldnews/comments/7g4za4.json?&limit=5".*/

  /*commentsMap:*/
  /*get commentsMap: https://www.reddit.com/r/9gag/comments/6azdc9.json?limit=100   here 6azdc9 is id which is found in post*/
  /*additional examples: https://www.reddit.com/r/AskReddit/comments/89uf7o.json?limit=100&depth=3&sort=confidence&rnd=906516*/

  /*paths below*/
  public readonly SEARCH_SUBREDDIT_PATH = '/subreddits/search.json';
  public readonly SEARCH_USER_PATH = '/subreddits/search.json';
  public readonly EXACT_USER_PATH = '/user/search.json';// https://www.reddit.com/user/sangupta637.json

  public readonly COMMENT_PATH = '/user/search.json';


  getSubredditUrl(subReddit:string){
    return `${this.REDDIT_ROOT}${subReddit}.json`;
  }
  getCommentUrl(subReddit:string, id:string, limit:number){
    return `${this.REDDIT_ROOT}/r/${subReddit}/comments/${id}.json?limit=${limit}`;
  }

  getSearchSubRedditPostsUrl(keyword:string):string{
    /*https://www.reddit.com/subreddits/search.json?q=9gag*/
    return this.REDDIT_ROOT+this.SEARCH_SUBREDDIT_PATH + `?q=${keyword}`;
  }

  FRONTEND_ORDER_IMAGE_EDIT_PAGE_URL(id){
    return `neworder/${id}/imageEdit`;
  }


  readonly FRONTEND_LOGIN_PAGE_URL = 'login';
  readonly FRONTEND_SIGNUP_PAGE_URL = 'signup';
  readonly FRONTEND_ORDER_DETAIL_URL = 'orderdetail';
  readonly FRONTEND_ALL_ORDERS_URL = 'allorders';
  readonly FRONTEND_NEW_ORDER_URL = 'neworder';
  readonly FRONTEND_ORDER_PAGE_URL = 'orderCarService';
  // readonly FRONTEND_ORDER_IMAGE_EDIT_PAGE_URL = 'neworder/:id/imageEdit';
  public FRONTEND_Keyword = '';
  public previousSRPURL  = "/";
  public previousSRPQueryParams  = {};
  public LOCALSTORAGE_user_id  = 'user_id';
  public LOCALSTORAGE_user_fullName  = 'userFullName';

  // readonly BACKEND_SERVER_URL = 'https://shielded-harbor-17443.herokuapp.com';
  readonly BACKEND_SERVER_URL = 'https://cartisanappnodejs.herokuapp.com';

  public BACKEND_SIGNUP_URL = this.BACKEND_SERVER_URL + '/users/signup';
  public BACKEND_LOGIN_URL =  this.BACKEND_SERVER_URL+ '/users/login';
  public BACKEND_UPLOAD_URL =  this.BACKEND_SERVER_URL+ '/upload';
  public BACKEND_GETALLORDERS_URL =  this.BACKEND_SERVER_URL+ '/getallorders';
  public BACKEND_GETORDER_URL =  this.BACKEND_SERVER_URL+ '/getorder';
  public BACKEND_ORDER_SAVE_URL =  this.BACKEND_SERVER_URL+ '/users/saveorder';
  public BACKEND_ORDER_UPDATE_URL =  this.BACKEND_SERVER_URL+ '/users/updateorder';

}
