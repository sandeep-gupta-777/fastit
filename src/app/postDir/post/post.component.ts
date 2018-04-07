import {Component, Input, OnInit} from '@angular/core';
import {RedditPostData} from "../../Models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post:RedditPostData;
  constructor() { }

  ngOnInit() {
  }

}
