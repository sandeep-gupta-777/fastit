import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  public readonly REDDIT_ROOT = 'http://www.reddit.com/';

  getSubredditUrl(subReddit:string){
    return `${this.REDDIT_ROOT}${subReddit}.json`;
  }


}
