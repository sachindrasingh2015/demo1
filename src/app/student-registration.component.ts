import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Register(regForm: any) {
    // debugger;
    // var firstname = regForm.form.controls.firstname.value;
    // var lastname = regForm.form.controls.lastname.value;
    // var email = regForm.form.controls.email.value;
    console.log(regForm)
  }
}
