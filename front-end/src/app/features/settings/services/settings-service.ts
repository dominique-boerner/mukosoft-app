import { Injectable } from '@angular/core';
import { PatientService } from '../../../core/services/patient-service/patient.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private readonly patientService: PatientService) {}

  getPatientName(): Observable<string> {
    return this.patientService.getPatientName();
  }

  getPatientAvatar(): Observable<string> {
    return this.patientService.getPatientAvatar();
  }
}
