import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromComment from "../store/commentReducer";
import * as fromCommentsActions from "../store/comment.action";
import {AppVariablesService} from "../../appVariables.service";
import * as fromAppReducer from "../../store/app.reducers";
import {CommentData} from "../../Models";
import {Observable} from "rxjs/Observable";
import {HelperService} from "../../helper.service";
import * as fromCommentReducers from "../store/commentReducer";
import {StoreService} from "../../store.service";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() post_id;
  @Input() subreddit;
  comment_index_array:string[];
  $commentArray:Observable<fromCommentReducers.State>;
  limit:number = 5;
  constructor(
    private store:Store<fromAppReducer.GlobalAppState>,
    private appVariableService:AppVariablesService,
    private storeService:StoreService,
    private helperService:HelperService,
  ) { }

  ngOnInit() {
    let url = this.appVariableService.getCommentUrl(this.subreddit,this.post_id, this.limit);
    console.log('dispatching BeginGetComments Action',url);

    // this.helperService.makeGetReq(url)
    //   .subscribe((value)=>{
    //     console.log(value);
    //   });

    this.store.dispatch(new fromCommentsActions.BeginGetComments({url:url}));


    // this.$commentArray =
    //   this.store.select('comment')
    //   .map((value:fromCommentReducers.State)=>{
    //     return (value) && value.post_comments_index_map.get(this.post_id);
    //   })
    //   .subscribe((value:string[])=>{
    //     this.comment_index_array = value||[];
    //   });


  }

  getComment(comment_id:string):CommentData{
    return this.storeService.getCommentByID(this.post_id, comment_id);
  }

}
