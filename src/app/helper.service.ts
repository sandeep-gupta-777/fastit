import { Injectable } from '@angular/core';
import {AppVariablesService} from "./appVariables.service";
import {isUndefined} from "util";

@Injectable()
export class HelperService {

  constructor(private appVariablesService:AppVariablesService) { }

  copyToClipboard(text) {
    let tempWindow:any = window;
    if (tempWindow.clipboardData && tempWindow.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return tempWindow.clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      let textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }



}
