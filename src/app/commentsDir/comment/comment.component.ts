import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromComment from "../store/commentReducer";
import * as fromCommentAction from "../store/comment.action";
import {HelperService} from "../../helper.service";
import {AppVariablesService} from "../../appVariables.service";
import {CommentData} from "../../Models";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() commentData:CommentData;

  constructor(
    private store:Store<fromComment.State>,
    private appVariablesService:AppVariablesService,
    private helper:HelperService
  ) { }

  ngOnInit() {
    // let commentUrl = this.appVariablesService.getCommentUrl('9gag','6azdc9', 2);
    // this.store.dispatch(new fromCommentAction.BeginGetComments({url: commentUrl}));
  }
}
