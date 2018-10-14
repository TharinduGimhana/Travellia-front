import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropertyoneComponent } from './addpropertyone.component';

describe('AddpropertyoneComponent', () => {
  let component: AddpropertyoneComponent;
  let fixture: ComponentFixture<AddpropertyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpropertyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpropertyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
