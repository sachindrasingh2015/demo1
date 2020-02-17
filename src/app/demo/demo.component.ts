import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  cols:number=6;
  bdr:number=6;
  firstname:string='sachindra';
  lastname:string='singh'
  num1:number=10;
  num2:number=10;

  currentdate=new Date;
  mynum:number=0.124145154;
  dob=new Date(2020,2,14)
  data:string='sachindra singh'
  salary:number=100000;
  constructor() { }

  ngOnInit(): void {
  }
employ:any[]=[
  {
    id:1, name: 'sachindra kumar', role:'software developer', gender:'male'
  },
  {
    id:2, name: 'masumiat', role:'software developer', gender:'female'
  },
  {
    id:3, name: 'sayoni', role:'software developer', gender:'female'
  }
];

  // public employee=[
  //   {
  //     "id":1, "name": 'sachindra kumar', "role":'software developer'
  //   },
  //   {
  //     "id":2, "name": 'masum', "role":'software developer'
  //   },
  //   {
  //     "id":3, "name": 'sayon', "role":'software developer'
  //   }
  // ];



student:any[]=[
  {
    name: 'sachindra',
    gender: 'male',
    country: 'india'
  },
  {
    name: 'robert',
    gender: 'male',
    country: 'usa'
  },
  {
    name: 'louis',
    gender: 'male',
    country: 'uk'
  }
];

getcolor(country){
  switch(country){
    case 'india':
    return 'green';
    case 'uk':
      return 'blue';
      case 'usa':
        return 'red';
  }
}
///************************************************************************* */
// this is component method of ngclass
colorcss(flag:string){
  let css;
  if(flag=='mode')
  {
    css={
      'one': true
    }
  }
  else{
    css={
      'two':true
    }
  }
  return css;
}
/************************************************************************** */
people: any[] = [
  {
    'country': 'INDIA',
    'people': [
      {
        'name': 'sachindra'
      },
      {
        'name': 'masum'
      }
    ]
  },
  {
    'country': 'USA',
    'people': [
      {
        'name': 'ROBERT'
      },
      {
        'name': 'louis'
      }
    ]
  }
]
}
