import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrackerComponent } from './tracker/tracker.component';
import { OverallComponent } from './overall/overall.component';
import { RegalldetailComponent } from './regalldetail/regalldetail.component';

const routes: Routes = [

  
  {
    path:"",component:LoginComponent
  },
  {
  path:"overall",component:OverallComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"regalldetail",component:RegalldetailComponent
    },
  {
    path:"tracker",component:TrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
