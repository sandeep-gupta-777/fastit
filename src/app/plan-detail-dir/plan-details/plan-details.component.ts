import { Component, OnInit } from '@angular/core';
import {PrettyprintPipe} from "../../prettyprint.pipe";

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss'],
})
export class PlanDetailsComponent implements OnInit {

  constructor() { }

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

}
