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

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() id;
  @Input() subreddit;
  commentArray:CommentData[];
  $commentArray:Observable<fromCommentReducers.State>;
  limit:number = 5;
  constructor(
    private store:Store<fromAppReducer.GlobalAppState>,
    private appVariableService:AppVariablesService,
    private helperService:HelperService,
  ) { }

  ngOnInit() {
    let url = this.appVariableService.getCommentUrl(this.subreddit,this.id, this.limit);
    console.log('dispatching BeginGetComments Action',url);

    // this.helperService.makeGetReq(url)
    //   .subscribe((value)=>{
    //     console.log(value);
    //   });

    this.store.dispatch(new fromCommentsActions.BeginGetComments({url:url}));
    // this.$commentArray =
      this.store.select('comment')
      .map((value:fromCommentReducers.State)=>{
        return (value) && value.commentsMap.get(this.id);
      })
      .subscribe((value:CommentData[])=>{
        this.commentArray = value||[];
        // this.commentArray.pop();

      });
  }

}
