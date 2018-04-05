import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromComment from "../store/commentReducer";
import * as fromCommentsActions from "../store/comment.action";
import {AppVariablesService} from "../../appVariables.service";
import * as fromAppReducer from "../../store/app.reducers";
import {CommentData} from "../../Models";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() id;
  @Input() subreddit;
  commentArray:CommentData[];
  $commentArray:Observable<CommentData[]>;
  limit:number = 5;
  constructor(
    private store:Store<fromAppReducer.GlobalAppState>,
    private appVariableService:AppVariablesService,
  ) { }

  ngOnInit() {
    let url = this.appVariableService.getCommentUrl(this.subreddit,this.id, this.limit);
    console.log(url);
    this.store.dispatch(new fromCommentsActions.BeginGetComments({url:url}));
    this.$commentArray = this.store.select('comment')
      .map((value:{commentData:CommentData[]})=>{
        return (value && value.commentData) || [];
      });
      // .subscribe((value:{commentData:CommentData[]})=>{
      //   console.log(value.commentData);
      //   this.commentArray = value.commentData;
      // });
  }

}
