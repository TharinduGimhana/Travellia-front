import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropertytwoComponent } from './addpropertytwo.component';

describe('AddpropertytwoComponent', () => {
  let component: AddpropertytwoComponent;
  let fixture: ComponentFixture<AddpropertytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpropertytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpropertytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
