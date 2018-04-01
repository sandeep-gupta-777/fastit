import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AdventureTimeService} from "../../advenduture-time.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() records: Observable<any[]>;
  @Input() columns: string[];

  constructor(private atService: AdventureTimeService) {
  }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.records = this.atService.getCharacters();
  }

}
