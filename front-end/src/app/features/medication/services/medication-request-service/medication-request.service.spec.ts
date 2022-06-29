import { TestBed } from '@angular/core/testing';

import { MedicationRequestService } from './medication-request.service';
import { mockMedicationRequestPrednisoneNonActive } from '../../__mocks__/mock-medication-request';

describe('MedicationService', () => {
  let service: MedicationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationRequestService);
  });

  describe('CRUD of MedicationRequest', () => {
    xit('should create a medicationRequest', () => {
      service
        .createMedicationRequest(mockMedicationRequestPrednisoneNonActive)
        .subscribe((medicationRequests) =>
          expect(medicationRequests.success).toBeTruthy()
        );
    });

    it('should get all medicationRequests', () => {
      service
        .getMedicationRequests()
        .subscribe((medicationRequests) =>
          expect(medicationRequests.length > 0).toBeTruthy()
        );
    });

    xit('should update a medicationRequest', () => {
      service
        .updateMedicationRequest(
          '#med103',
          mockMedicationRequestPrednisoneNonActive
        )
        .subscribe((medicationRequests) =>
          expect(medicationRequests.success).toBeTruthy()
        );
    });

    xit('should delete a medicationRequest', () => {
      service
        .deleteMedicationRequest('#med103')
        .subscribe((medicationRequests) =>
          expect(medicationRequests.success).toBeTruthy()
        );
    });
  });
});
