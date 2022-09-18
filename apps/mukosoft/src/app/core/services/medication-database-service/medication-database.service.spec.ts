import { TestBed } from '@angular/core/testing';

import { MedicationDatabaseService } from './medication-database.service';

describe('MedicationDatabaseService', () => {
  let service: MedicationDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
