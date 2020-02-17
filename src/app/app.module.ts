import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { StudentDetailsComponent } from './student-details.component';
import { StudentRegistrationComponent } from './student-registration.component';
import { NestedformArrayComponent } from './Form/nestedform-array/nestedform-array.component';
import { DynamicRowComponent } from './form/dynamic-row/dynamic-row.component';
import { RadioCheckboxComponent } from './Radio/radio-checkbox/radio-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MypipePipe,
    StudentComponent,
    PageNotFoundComponent,
    StudentDetailsComponent,
    StudentRegistrationComponent,
    NestedformArrayComponent,
    DynamicRowComponent,
    RadioCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
