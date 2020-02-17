import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Formsignup } from './formsignup';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  signupForm:FormGroup;
  Firstname:string='';
  Lastname:string='';
  Email:string='';
  password:string=''


  constructor(private frmbilder:FormBuilder) {
    this.signupForm=frmbilder.group({
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

  postdata(signupForm){
    // debugger;
    // this.Firstname=signupForm.controls.fname.value;
    // this.Lastname=signupForm.controls.lname.value;
    // this.Email=signupForm.controls.email.value;
    // this.password=signupForm.controls.password.value;
    // this.Firstname=signupForm.get('fname').value;
    this.signupForm.value;
    console.log(this.signupForm);
  }

  ngOnInit(): void {
    const arr=new FormArray([
      new FormControl(),
      new FormControl()
    ]);
    // arr.setValue(['sachin','singh']);
    // arr.patchValue(['sachindra',''])
    // arr.reset(['fName:','lName:'])
    console.log(arr.value);
    console.log(arr.status);


    // THIS IS VALUE CHANGE FOR SINGLE VALUE
    // this.signupForm.get('fname').valueChanges.subscribe(
    //   uname =>{
    //     console.log('fname changed:'+uname);
    //   }
    // )

    // THIS IS VALUE CHANGE OF FULL FORM VALUE
    // this.signupForm.valueChanges.subscribe((uname:Formsignup)=>{
    //   console.log(uname.fname);
    //   console.log(uname.lname);
    //   console.log(uname.email);
    //   console.log(uname.password)
    // })

    // THIS IS STATUS CHANGE FOR SINGLE VALUE
    // this.signupForm.get('fname').statusChanges.subscribe(
    //   status =>{
    //     console.log(status);
    //   }
    // )
    // THIS IS STATUS CHANGE FOR FULL FORM VALUE
  //  this.signupForm.statusChanges.subscribe(
  //    status=>{
  //      console.log(status);
  //    }
  //  )
  }

  resetForm(){
    this.signupForm.reset();
  }
  filldata(){
    this.signupForm.setValue({
      'fname':"sachin",
      "lname":"singh",
      "email":"abc@gmail.com",
      "password":"12345"
    });
  }
}
