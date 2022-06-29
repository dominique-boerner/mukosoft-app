import { TestBed } from '@angular/core/testing';

import { MedicationRequestDatabaseService } from './medication-request-database.service';

describe('MedicationRequestDatabaseService', () => {
  let service: MedicationRequestDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationRequestDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
