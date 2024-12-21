import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [

  
  {
    path:"",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
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
