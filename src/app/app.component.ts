import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userId = 1;
  constructor(private router: Router) { }
  login() {
    let sampleId = 1;
    if (this.userId === sampleId) {
      // this.router.navigate(['home', 'charts']);
      this.router.navigateByUrl('/home/charts');
    }
    else {
      this.router.navigate(['login']);
    }
  }
}
