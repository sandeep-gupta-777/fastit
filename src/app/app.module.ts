import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {Route, Router, RouterModule} from "@angular/router";
import {NotfoundComponent} from "./notfound/notfound.component";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AuthService} from "./auth.service";
import {ServerService} from "./server.service";
import {HelperService} from "./helper.service";
import {AppVariablesService} from "./appVariables.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {DashboardComponent} from './dashboard/dashboard.component';

import {HomepageComponent} from './homepage/homepage.component';
import {RouterGaurdServiceService} from "./router-gaurd-service.service";

import {PlanCardsComponent} from './plan-detail-dir/plan-cards/plan-cards.component';
import {PlanDetailsComponent} from './plan-detail-dir/plan-details/plan-details.component';
import {PrettyprintPipe} from './prettyprint.pipe';
import {PlanDetailsWrapperComponent} from './plan-detail-dir/plan-details-wrapper/plan-details-wrapper.component';
import { PlanDataComponent } from './plan-detail-dir/plan-data/plan-data.component';
import { PlanConfigComponent } from './plan-detail-dir/plan-config/plan-config.component';
import { TableComponent } from './utility/table/table.component';
import { TableRowComponent } from './utility/table-row/table-row.component';
import {AdventureTimeService} from "./advenduture-time.service";
import { PlansComponent } from './plan-detail-dir/plans/plans.component';
import { PlanOptionsComponent } from './plan-detail-dir/plan-options/plan-options.component';
import { TooltipDirective } from './tooltip.directive';
import { PostComponent } from './postDir/post/post.component';
import { CommentComponent } from './commentsDir/comment/comment.component';
import { NewCommentComponent } from './commentsDir/new-comment/new-comment.component';
import { CommentListComponent } from './commentsDir/comment-list/comment-list.component';
import { RedditFeedComponent } from './reddit-feed/reddit-feed.component';
import { PostListComponent } from './postDir/post-list/post-list.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {reducers} from "./store/app.reducers";
import {PostEffects} from "./postDir/store/post.effects";
import { SearchBarComponent } from './search-dir/search-bar/search-bar.component';
import {SearchListComponent} from "./search-dir/search-list/search-list.component";
import {SearchItemComponent} from "./search-dir/search-item/search-item.component";
import {SearchEffects} from "./search-dir/store/search.effects";

const routes: Route[] = [
  {path: 'search', component: SearchListComponent },
  {path: 'login', component: LoginComponent, data:{ isLoginMode:true } },
  {path: 'signup', component: LoginComponent,data:{ isLoginMode:false } },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo:'plans', pathMatch:'prefix'},
      {path: 'plans', component: PlansComponent},
      /*TODO: can this repetition be avoided?*/
      {path: 'plans/:plan_id', component: PlanDetailsWrapperComponent, children:[
          {path: '', component: PlanOptionsComponent},
          {path: 'data/:time', component: PlanDataComponent},
          {path: 'config/:time', component: PlanConfigComponent},
      ]},

    ]
  },
  {path: '', component: HomepageComponent},
  {path: '**', component: NotfoundComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomepageComponent,

    PlanCardsComponent,
    PlanDetailsComponent,
    PrettyprintPipe,
    PlanDetailsWrapperComponent,
    PlanDataComponent,
    PlanConfigComponent,
    TableComponent,
    TableRowComponent,
    PlansComponent,
    PlanOptionsComponent,
    TooltipDirective,
    PostComponent,
    CommentComponent,
    NewCommentComponent,
    CommentListComponent,
    RedditFeedComponent,
    PostListComponent,
    SearchBarComponent,
    SearchListComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PostEffects, SearchEffects]),
    StoreDevtoolsModule,
    !environment.production?  StoreDevtoolsModule.instrument():[]

  ],
  providers: [
    AuthService,
    ServerService,
    HelperService,
    AppVariablesService,
    RouterGaurdServiceService,
    AdventureTimeService
  ],
  bootstrap: [
    AppComponent

  ]
})
export class AppModule {
}
