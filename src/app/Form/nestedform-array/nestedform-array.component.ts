import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-nestedform-array',
  templateUrl: './nestedform-array.component.html',
  styleUrls: ['./nestedform-array.component.scss']
})
export class NestedformArrayComponent implements OnInit {
  Formgroup:FormGroup;

  form:any;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ContactNos:new FormArray([
        new FormControl('1234567890'),
        new FormControl('0123456789')
      ]),
    });
  }

  onsubmit(){
    console.log(this.form.get('ContactNos').value);
    console.log(this.form.value)
  }

  add(){
    console.log()
    this.form.get('ContactNos').push(new FormControl());
  }
  set()
  {
    this.form.get('ContactNos').patchValue(['0123456789','9876854785']);
  }
}
