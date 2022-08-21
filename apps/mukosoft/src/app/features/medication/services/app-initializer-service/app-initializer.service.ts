import { Injectable } from '@angular/core';
import { PatientService } from '../../../../core/services/patient-service/patient.service';

@Injectable()
export class AppInitializerService {
  constructor(private readonly patientService: PatientService) {
    this.patientService.setPatientStore();
  }
}
