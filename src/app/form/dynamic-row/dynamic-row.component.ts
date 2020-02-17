import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-row',
  templateUrl: './dynamic-row.component.html',
  styleUrls: ['./dynamic-row.component.scss']
})
export class DynamicRowComponent implements OnInit {
  form:FormGroup;
  Totalrow:number;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      itemRows:this.fb.array([
        this.inItitemRows()
      ])
    })
  }

  inItitemRows(){
    return this.fb.group({
      name:new FormControl(''),
      roll:new FormControl(''),
      class:new FormControl(''),
      mobile:new FormControl('')
    });
  }

  Addnew(){
    const control=<FormArray>this.form.controls['itemRows'];
    control.push(this.inItitemRows());
    return <FormArray>this.form.get('itemRows');//return is important for show dynamic row
  }

  delete(index: number){
    const control=<FormArray>this.form.controls['itemRows'];
    if(control!=null){
      this.Totalrow=control.value.length;
    }
    if(this.Totalrow > 1){
      control.removeAt(index);
    }
    else{
      alert('one item is mandatory');
      return false;
    }
  }


}
