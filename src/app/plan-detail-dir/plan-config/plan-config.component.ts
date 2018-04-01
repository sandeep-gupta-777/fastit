import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HelperService} from "../../helper.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-plan-config',
  templateUrl: './plan-config.component.html',
  styleUrls: ['./plan-config.component.scss']
})
export class PlanConfigComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log("after view init");
      // $('[data-toggle="tooltip"]').tooltip();
    // ((<any>document).querySelector('[data-toggle="tooltip"]')).tooltip();

  }

  constructor(private helper:HelperService) { }
  firstBoxHover = false;
  toolTipTitle = "Click to copy";
  secondBoxHover = false;
  uploadUrl = "upload.example.com";
  webHookUrl = "hook.example.com";
  testJson = {
    id: '0x13344',
    dateOfJoining: "Date",
    currentBalance:"number",
    "transectionHistory":[{
      "date":"Date",
      "amount":"number",
      "credit":"boolean",
      "debit":"boolean"
    }]
  };
  ngOnInit() {
  }
  copyToClipboard(str){
    // $('[data-toggle="tooltip"]').tooltip('hide')
    //   .attr('data-original-title', "Link copied!")
    //   .tooltip('show');
    // setTimeout(()=>{
    //   $('[data-toggle="tooltip"]').tooltip('hide')
    //     .attr('data-original-title', "Click to copy")
    //     .tooltip('show');
    // },3000);
    this.helper.copyToClipboard(str);
  }

}
