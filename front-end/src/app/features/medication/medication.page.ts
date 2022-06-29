import { Component, OnInit } from '@angular/core';
import { MedicationRequestService } from './services/medication-request-service/medication-request.service';
import { MedicationRequest } from 'fhir/r4';
import { MedicationService } from './services/medication-service/medication.service';
import { mockMedicationRequestPrednisoneActive } from './__mocks__/mock-medication-request';
import { UuidService } from '../../core/services/uuid-service/uuid.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'medication.page.html',
})
export class MedicationPage implements OnInit {
  $medicationRequestsError = this.medicationRequestService.error;

  $currentIntervalMedicationRequests =
    this.medicationRequestService.getCurrentIntervalMedicationRequests();

  searchString = '';

  constructor(
    private readonly medicationRequestService: MedicationRequestService,
    private readonly medicationService: MedicationService,
    private readonly uuidService: UuidService
  ) {}

  ngOnInit() {
    this.medicationRequestService.synchronizeMedicationRequestsWithDatabase();
  }

  getMedicationByReference(medicationRequest: MedicationRequest) {
    if (medicationRequest) {
      return this.medicationService.getMedicationByReference(
        medicationRequest.medicationReference.reference
      );
    }
  }

  addMedicationMock() {
    this.medicationRequestService.createMedicationRequest({
      ...mockMedicationRequestPrednisoneActive,
      id: this.uuidService.generateUuid(),
    });
  }

  removeMedicationRequest(id: string) {
    this.medicationRequestService.deleteMedicationRequest(id);
  }
}
