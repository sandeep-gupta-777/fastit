import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular App';
  mymodel;
  valuechange(newValue) {
    let mymodel = newValue;
    console.log(newValue)
  }
}
