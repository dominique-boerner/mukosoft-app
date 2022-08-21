import { Injectable } from '@angular/core';
import { PatientService } from '../../../core/services/patient-service/patient.service';
import { Observable } from 'rxjs';
import { HumanName } from 'fhir/r4';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private readonly patientService: PatientService) {}

  getPatientName(): Observable<string> {
    return this.patientService.getPatientName();
  }

  setPatientName(name: HumanName) {
    return this.patientService.setPatientName(name);
  }

  getPatientAvatar(): Observable<string> {
    return this.patientService.getPatientAvatar();
  }
}
