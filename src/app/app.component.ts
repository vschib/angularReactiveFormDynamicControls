import { Component } from '@angular/core';
// tslint:disable-next-line: import-spacing
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // subscription: any;
  title = 'Angular Reactive Form With Dynamic Controls';

  // constructor(private router: Router) {
  //   this.subscription = this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationStart) {

  //     }
  //   });
  // }
}
