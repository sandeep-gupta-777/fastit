import {Component, OnInit} from '@angular/core';
import {HelperService} from "../helper.service";
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppVariablesService} from "../appVariables.service";
import {ServerService} from "../server.service";
import {Store} from "@ngrx/store";
import * as fromSearchReducer from "../search-dir/store/search.reducer";
import * as fromSearchActions from "../search-dir/store/search.action";
import {GlobalAppState} from "../store/app.reducers";
import {Observable} from "rxjs/Observable";
import {SubRedditData} from "../Models";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  keyword;
  $searchResults: Observable<SubRedditData[]>;
  constructor(public helperService: HelperService,
              public authService: AuthService,
              private appVariablesService: AppVariablesService,
              private serverService: ServerService,
              private activatedRoute: ActivatedRoute,
              private store: Store<GlobalAppState>,
              private router:Router) {
  }

  ngOnInit() {
    this.$searchResults =
      this.store.select('search')
      .map((data) => {
        /*TODO: implement error handling here*/
        return (data && data.resultsData )? ( data.resultsData) : [];
        // return data.resultsData;
      })
  }

  performSearch($event){
    let keyword = this.keyword;
    if(keyword!=='')
    this.store.dispatch(new fromSearchActions.BeginGetResults({url: this.appVariablesService.getSearchSubRedditUrl(keyword)}));
    console.log($event);;
  }


  homeClicked(){
    this.router.navigate(["/"]);
  }
  orderClicked(){
    this.router.navigate([this.appVariablesService.FRONTEND_NEW_ORDER_URL]);
  }

  goToLoginPage() {
    this.router.navigate([this.appVariablesService.FRONTEND_LOGIN_PAGE_URL]);
  }

  logout() {
    // document.getElementById("menu").classList.remove("show");
    localStorage.clear();
    // this.global.previousSRPURL = window.location.pathname;
    // this.global.previousSRPQueryParams = this.activatedRoute.snapshot.queryParams;
    this.router.navigate(["/"]);
    // this.helper.showNotificationBarEvent.emit({message:'You are logged out!'});
  };


}
