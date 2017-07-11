import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter = 0;
  // @select('counter') count;

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      const store = ngRedux.getState();
      this.counter = store.counter;
      console.log(store);
    });
  }

  public increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT })   // Action object
  }
}
