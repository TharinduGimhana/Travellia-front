import { TestBed, inject } from '@angular/core/testing';

import { AdddestinationService } from './adddestination.service';

describe('AdddestinationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdddestinationService]
    });
  });

  it('should be created', inject([AdddestinationService], (service: AdddestinationService) => {
    expect(service).toBeTruthy();
  }));
});
