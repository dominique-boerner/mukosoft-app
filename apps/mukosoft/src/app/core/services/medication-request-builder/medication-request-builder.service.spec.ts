import { TestBed } from '@angular/core/testing';

import { MedicationRequestBuilderService } from './medication-request-builder.service';

describe('MedicationRequestBuilderService', () => {
  let service: MedicationRequestBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationRequestBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
