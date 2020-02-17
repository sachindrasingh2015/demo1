import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  signup:FormGroup;
  Firstname:string='';
  Lastname:string='';
  Email:string='';
  password:string=''


  constructor(private frmbilder:FormBuilder) {
    this.signup=frmbilder.group({
      // fname:new FormControl(""),
      // lname:new FormControl(""),
      // email:new FormControl(""),
      // password:new FormControl("")
      fname:['',[Validators.required]],
      lname:['',[Validators.required,Validators.min(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
    return ;
  }

  postdata(signup){
    debugger;
    this.Firstname=signup.controls.fname.value;
    this.Lastname=signup.controls.lname.value;
    this.Email=signup.controls.email.value;
    this.password=signup.controls.password.value;
    console.log(signup)
  }

  ngOnInit(): void {
  }



}
