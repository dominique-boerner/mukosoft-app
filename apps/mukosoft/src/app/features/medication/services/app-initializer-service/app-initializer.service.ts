import { Injectable } from "@angular/core";
import { PatientService } from "../../../../core/services/patient-service/patient.service";
import { MedicationRequestService } from "../../../../core/services/medication-request-service/medication-request.service";

@Injectable()
export class AppInitializerService {
  constructor(
    private readonly patientService: PatientService,
    private readonly medicationRequestService: MedicationRequestService
  ) {
    this.patientService.setPatientStore();
    this.medicationRequestService.synchronizeMedicationRequestsWithDatabase();
  }
}
