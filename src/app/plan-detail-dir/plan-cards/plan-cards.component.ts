import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-plan-cards',
  templateUrl: './plan-cards.component.html',
  styleUrls: ['./plan-cards.component.scss']
})
export class PlanCardsComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  @Input() doesDataExists:boolean = true;
  isSelected:boolean = false;

  ngOnInit() {
  }

  cardClicked(){
    this.isSelected = true;
    this.router.navigateByUrl('/dashboard/plans/1');
  }
}
