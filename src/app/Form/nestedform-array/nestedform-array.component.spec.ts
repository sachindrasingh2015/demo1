import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedformArrayComponent } from './nestedform-array.component';

describe('NestedformArrayComponent', () => {
  let component: NestedformArrayComponent;
  let fixture: ComponentFixture<NestedformArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedformArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedformArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
