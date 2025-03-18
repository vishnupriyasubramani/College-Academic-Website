import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { SemesterComponent } from './semester/semester.component';
import { PlacementComponent } from './placement/placement.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ProgressreportComponent } from './progressreport/progressreport.component';



const routes: Routes = [{
path:'',component:HomeComponent
},
  {
  path:'Home',component:HomeComponent
},
{
  path:'StudentLogin',component:StudentLoginComponent
},

{
  path:'Progressreport',component:ProgressreportComponent
},

{
  path:'About',component:AboutComponent
},

{
  path:'Placement',component:PlacementComponent
},


{
  path:'Contact',component:ContactComponent
},
{ path: 'semester', component: SemesterComponent }, 
  {
     path: 'semester/:semester', component: SemesterComponent 
    }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes), // ✅ Correct
    FormsModule // ✅ Correct
  ],
  
  exports: [RouterModule] // ✅ Correct
})
export class AppRoutingModule { }  