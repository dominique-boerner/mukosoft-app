import { Injectable } from '@angular/core';
import { PatientService } from '../../../core/services/patient-service/patient.service';
import { Observable } from 'rxjs';
import { PatientDatabaseService } from '../../../core/services/patient-database-service/patient-database.service';
import { Patient } from 'fhir/r4';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private readonly patientService: PatientService,
    private readonly patientDatabaseService: PatientDatabaseService
  ) {}

  getPatient(): Observable<Patient> {
    return this.patientService.getPatient();
  }

  getPatientName(): Observable<string> {
    return this.patientService.getPatientName();
  }

  getPatientAvatar(): Observable<string> {
    return this.patientService.getPatientAvatar();
  }

  save(patient: Patient) {
    this.patientDatabaseService
      .updatePatient(patient)
      .then((patient) => this.patientService.setPatient(patient));
  }
}
