import { TestBed, inject } from '@angular/core/testing';

import { AddpropertyoneService } from './addpropertyone.service';

describe('AddpropertyoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddpropertyoneService]
    });
  });

  it('should be created', inject([AddpropertyoneService], (service: AddpropertyoneService) => {
    expect(service).toBeTruthy();
  }));
});
