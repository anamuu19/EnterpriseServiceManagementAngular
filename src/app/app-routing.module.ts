import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { RequestComponent } from './Components/request/request.component';
import { SolutionComponent } from './Components/solution/solution.component';
import { ReportComponent } from './Components/report/report.component';
import { RegistrationComponent } from './Components/registration/registration.component';


const routes: Routes = [
  {path:'', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'navbar', component:NavbarComponent, children:[
    {path:'', component:HomeComponent},
    {path:'report', component:ReportComponent},
    {path:'request', component:RequestComponent},
    {path:'solution', component:SolutionComponent}
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
