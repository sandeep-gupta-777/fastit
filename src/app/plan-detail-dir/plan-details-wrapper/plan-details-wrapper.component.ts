import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../helper.service";

@Component({
  selector: 'app-plan-details-wrapper',
  templateUrl: './plan-details-wrapper.component.html',
  styleUrls: ['./plan-details-wrapper.component.scss']
})
export class PlanDetailsWrapperComponent implements OnInit {

  constructor(private helper:HelperService) { }

  showSubControls_right  =false;
  showSubControls_left  =false;

  ngOnInit() {
  }
  configClicked(){
    alert();
    this.showSubControls_left = !this.showSubControls_left;
    let tempCopied = this.helper.copyToClipboard("www.google.com");
    alert(tempCopied);

  }

}
