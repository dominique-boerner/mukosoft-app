import { Component, OnInit } from '@angular/core';
import { MedicationRequestService } from './services/medication-request-service/medication-request.service';
import { MedicationRequest } from 'fhir/r4';
import { MedicationService } from './services/medication-service/medication.service';
import { mockMedicationRequestPrednisoneActive } from './__mocks__/mock-medication-request';
import { UuidService } from '../../core/services/uuid-service/uuid.service';
import { ToastService } from '../../core/services/toast-service/toast.service';
import { MedicationRequestError } from './models/medication-request-error';

@Component({
  selector: 'app-tab2',
  templateUrl: 'medication.page.html',
})
export class MedicationPage implements OnInit {
  currentIntervalMedicationRequests$ =
    this.medicationRequestService.getCurrentIntervalMedicationRequests();

  searchString = '';

  constructor(
    private readonly medicationRequestService: MedicationRequestService,
    private readonly medicationService: MedicationService,
    private readonly uuidService: UuidService,
    private readonly toastService: ToastService
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
    const medicationRequest = mockMedicationRequestPrednisoneActive;
    this.medicationRequestService
      .createMedicationRequest({
        ...medicationRequest,
        id: this.uuidService.generateUuid(),
      })
      .then(() => {
        this.toastService.showSuccessToast(
          `Die Medikation wurde erfolgreich angelegt.`
        );
      })
      .catch((error: MedicationRequestError) => {
        this.toastService.showErrorToast(error.errorMessage);
      });
  }

  removeMedicationRequest(id: string) {
    this.medicationRequestService.deleteMedicationRequest(id);
  }

  removeAllMedications() {
    this.medicationRequestService.deleteAllMedicationRequests();
  }
}
