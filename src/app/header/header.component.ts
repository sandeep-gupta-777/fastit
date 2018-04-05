import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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

  keyword:string;
  hideTypeahead:boolean = true;
  selectedtypeaheadText;
  highlightedTypeaheadCount=0;
  $searchResults: Observable<SubRedditData[]>;
  subRedditSearchResults:SubRedditData[];
  constructor(public helperService: HelperService,
              public authService: AuthService,
              private appVariablesService: AppVariablesService,
              private serverService: ServerService,
              private activatedRoute: ActivatedRoute,
              private store: Store<GlobalAppState>,
              private router:Router) {
  }

  @ViewChild('search') searchResultPivot: ElementRef;
  @HostListener('document:click', ['$event']) onClick(event) {
    this.hideTypeahead = !this.searchResultPivot.nativeElement.contains(event.target);
  }

  ngOnInit() {
    this.$searchResults =
      this.store.select('search')
      .map((data) => {
        /*TODO: implement error handling here*/
        return (data && data.resultsData )? ( data.resultsData) : [];
        // return data.resultsData;
      });

    this.store.select('search')
      .map((data) => {
        /*TODO: implement error handling here*/
        return (data && data.resultsData )? ( data.resultsData) : [];
        // return data.resultsData;
      })
      .subscribe((value)=>{
        this.subRedditSearchResults = value;
      })
  }

  performSearch(keyword:string){
    this.keyword = keyword;
    // let keyword = this.keyword;
    if(keyword!=='')
    this.store.dispatch(new fromSearchActions.BeginGetResults({url: this.appVariablesService.getSearchSubRedditPostsUrl(keyword)}));
  }

  keypressed($event){
    console.log($event);
    if($event.keyCode===40){
      ++this.highlightedTypeaheadCount;
    }
    else if($event.keyCode===38){
      --this.highlightedTypeaheadCount;
    }
    else if($event.keyCode===13){
      /*TODO: If possible do tranformation in map*/
      let highlightedTypeaheadText:string = this.subRedditSearchResults[this.highlightedTypeaheadCount].display_name;
      this.performSearch(highlightedTypeaheadText);
      /*TODO: perform search for subreddit*/
    }
    if(this.highlightedTypeaheadCount<0){
      this.highlightedTypeaheadCount = Math.min(this.subRedditSearchResults.length-1, 10);
    }
    else if(this.highlightedTypeaheadCount>Math.min(this.subRedditSearchResults.length-1, 10)){
      this.highlightedTypeaheadCount =0;
    }
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
