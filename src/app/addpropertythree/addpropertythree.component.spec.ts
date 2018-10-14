import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropertythreeComponent } from './addpropertythree.component';

describe('AddpropertythreeComponent', () => {
  let component: AddpropertythreeComponent;
  let fixture: ComponentFixture<AddpropertythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpropertythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpropertythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
