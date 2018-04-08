import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalAppState} from "./store/app.reducers";

@Injectable()
export class StoreService {

  constructor(private store:Store<GlobalAppState>) { }


}
