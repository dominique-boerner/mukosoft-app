import { Injectable } from '@angular/core';
import { PatientService } from '../../../../core/services/patient-service/patient.service';
import { Store } from '@ngrx/store';
import { Patient } from 'fhir/r4';
import { PatientDatabaseService } from '../../../../core/services/patient-database-service/patient-database.service';
import { setPatient } from '../../../../core/actions/patient.action';

@Injectable()
export class AppInitializerService {
  constructor(
    private readonly patientService: PatientService,
    private readonly store: Store<Patient>,
    private readonly patientDatabaseService: PatientDatabaseService
  ) {
    this.patientDatabaseService.getPatient().then((response) => {
      const noPatientDataExists = response.total_rows === 0;
      if (noPatientDataExists) {
        const newPatient = this.patientService.getInitialPatient();
        this.patientDatabaseService.putPatient(newPatient).catch((err) => err);
        this.store.dispatch(setPatient({ patient: newPatient }));
      } else {
        const patient = response.rows[0].doc;
        this.store.dispatch(setPatient({ patient }));
      }
    });
  }
}
