import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { StudentRegistrationComponent } from './student-registration.component';
import { StudentDetailsComponent } from './student-details.component';
import { NestedformArrayComponent } from './Form/nestedform-array/nestedform-array.component';
import { DynamicRowComponent } from './form/dynamic-row/dynamic-row.component';
import { RadioCheckboxComponent } from './Radio/radio-checkbox/radio-checkbox.component';


const routes: Routes = [
  {
    path:'',redirectTo:'student',pathMatch:'full'
  },
  {
    path:'student',
    children:[
      {
        path:'', component:StudentComponent
      },
      {
        path:'demo', component:DemoComponent
      },
      {
        path:'registration', component:StudentRegistrationComponent
      },
      {
        path:'details', component:StudentDetailsComponent
      },
      {
        path:'array',component:NestedformArrayComponent
      },
      {
        path:'row',component:DynamicRowComponent
      },
      {
        path:'radio',component:RadioCheckboxComponent
      }
    ],
  },
  {path:'**', component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
