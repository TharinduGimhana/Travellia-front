import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddestinationComponent } from './adddestination.component';

describe('AdddestinationComponent', () => {
  let component: AdddestinationComponent;
  let fixture: ComponentFixture<AdddestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
