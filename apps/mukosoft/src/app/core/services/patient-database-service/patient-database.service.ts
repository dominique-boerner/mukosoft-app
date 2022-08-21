import { Inject, Injectable } from '@angular/core';
import { AbstractDatabaseService } from '../../abstract/abstract-database-service';
import { UuidService } from '../uuid-service/uuid.service';
import { Patient } from 'fhir/r4';
import { Logger } from '../../util/logger';

@Injectable({
  providedIn: 'root',
})
export class PatientDatabaseService extends AbstractDatabaseService {
  constructor(@Inject(UuidService) uuidService: UuidService) {
    super('crm_patient');
  }

  putPatient(patient: Patient) {
    return this.db
      .put<Patient>({
        ...patient,
        _id: patient.id,
      })
      .then((response) => {
        Logger.success(
          `successfully set patient with id ${patient.id}`,
          PatientDatabaseService.name
        );
        return response;
      })
      .catch((error) => {
        Logger.error(
          `Error while setting patient: ${error}`,
          PatientDatabaseService.name
        );
        return error;
      });
  }

  async updatePatient(patient: Patient) {
    const docsResponse = await this.getPatient();
    const patientDoc = docsResponse.rows[0].doc;

    const newPatientDoc = {
      ...patientDoc,
      ...patient,
    };

    this.putPatient(newPatientDoc);
  }

  getPatient() {
    return this.db
      .allDocs<Patient>({
        include_docs: true,
        attachments: true,
        descending: false,
      })
      .then((response) => {
        Logger.success(
          `successfully loaded patient!`,
          PatientDatabaseService.name
        );
        return response;
      })
      .catch((error) => {
        Logger.error(
          `Error while loading patient: ${error}`,
          PatientDatabaseService.name
        );
        return error;
      });
  }
}
