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
      service.createMedicationRequest(mockMedicationRequestPrednisoneNonActive);
      expect(service.error.value).toBeFalse();
    });

    it('should get all medicationRequests', () => {
      service.getMedicationRequests();
      expect(service.error.value).toBeFalse();
    });

    xit('should update a medicationRequest', () => {
      service.updateMedicationRequest(
        '#med103',
        mockMedicationRequestPrednisoneNonActive
      );
      expect(service.error.value).toBeFalse();
    });

    xit('should delete a medicationRequest', () => {
      service.deleteMedicationRequest('#med103');
      expect(service.error.value).toBeFalse();
    });
  });
});
