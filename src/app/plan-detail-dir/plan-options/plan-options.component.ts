import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../helper.service";

@Component({
  selector: 'app-plan-options',
  templateUrl: './plan-options.component.html',
  styleUrls: ['./plan-options.component.scss']
})
export class PlanOptionsComponent implements OnInit {

  showSubControls_right  =false;
  showSubControls_left  =false;

  constructor(private helper:HelperService) { }

  ngOnInit() {
  }
  configClicked(){
    alert();
    this.showSubControls_left = !this.showSubControls_left;
    let tempCopied = this.helper.copyToClipboard("www.google.com");
    alert(tempCopied);

  }

}
