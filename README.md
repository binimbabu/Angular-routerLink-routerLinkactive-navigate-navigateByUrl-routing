RouterLink 

routerlink is used instead of href in anchor tag in html. Router link used to navigate to different urls directly in browser ( when the url specified component is registered in app.routing.module.ts).  Illustration shown as below

app.component.html

<div>
<a [routerLink]="['/login']" routerLinkActive="active">Login</a>&nbsp;
<a [routerLink]="['/register']" routerLinkActive="active">Register</a>
</div>


Router LinkActive will highlight (if we give css using a class)  which component is clicked or invoked when clicking on the anchor tag 


app.component.scss

.active{
color:red;
}




Another example 


Instead of using routerLink and directly redirecting to that component , we want to go from  login to dashboard if a condition is satisfied . In the code below the userId and  sampleId are equal then only the router will navigate to dashboard ( using this.router.navigate(['dashboard']);   )  else it will go login page again  (  this.router.navigate(['login']);  ).


export class AppComponent {
userId = 1;
constructor(private router: Router) { }
login() {
let sampleId = 1;
if (this.userId === sampleId) {
this.router.navigate(['dashboard']);
}
else {
this.router.navigate(['login']);
}
}
}






app.component.html


<div>
<a [routerLink]="['/register']" routerLinkActive="active">Register</a>
<button (click)="login()">Login</button>
</div>
<router-outlet></router-outlet>



We can also give navigateByUrl  (i.e  this.router.navigateByUrl('/dashboard'); ) which will navigate to the path ( here dashboard).


export class AppComponent {
userId = 1;
constructor(private router: Router) { }
login() {
let sampleId = 1;
if (this.userId === sampleId) {
this.router.navigateByUrl('/dashboard');
}
else {
this.router.navigate(['login']);
}
}
}


Another example

If we give 2 values in the path of app.routing.module.ts ( i.e { path: 'home/charts', component: HomeComponent }  where path is home/charts) , then navigate should be written like this ‘ this.router.navigate(['home', 'charts']);  ‘


export class AppComponent {
userId = 1;
constructor(private router: Router) { }
login() {
let sampleId = 1;
if (this.userId === sampleId) {
this.router.navigate(['home', 'charts']);
// this.router.navigateByUrl('/dashboard');
}
else {
this.router.navigate(['login']);
}
}
}



When we use navigateByUrl and if we give 2 values in the path of app.routing.module.ts ( i.e { path: 'home/charts', component: HomeComponent }  where path is home/charts) , then navigateByUrl should be written like this ‘ this.router.navigateByUrl('/home/charts'); ‘

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

