import { Inject, Injectable } from "@angular/core";
import { AbstractDatabaseService } from "../../abstract/abstract-database-service";
import { UuidService } from "../uuid-service/uuid.service";
import { Patient } from "fhir/r4";
import { Logger } from "../../util/logger/logger";

@Injectable({
  providedIn: "root",
})
export class PatientDatabaseService extends AbstractDatabaseService {
  constructor(@Inject(UuidService) uuidService: UuidService) {
    super("crm_patient");
  }

  putPatient(patient: Patient) {
    const newPatient = {
      ...patient,
      _id: patient.id,
    };

    return this.db
      .put<Patient>(newPatient)
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

  async updatePatient(patient: Patient): Promise<Patient> {
    const docsResponse = await this.getPatient();
    const patientDoc = docsResponse.rows[0].doc;

    const newPatientDoc = {
      ...patientDoc,
      ...patient,
    };

    await this.putPatient(newPatientDoc);

    return newPatientDoc;
  }

  getPatient() {
    return this.db
      .allDocs<Patient>({
        include_docs: true,
        attachments: true,
        limit: 1,
        descending: true,
      })
      .then((response) => {
        Logger.success(
          `successfully loaded patient ${response.rows[0].id}!`,
          PatientDatabaseService.name
        );
        return response;
      })
      .catch((error) => {
        Logger.error(
          `Error while loading patient: ${error}`,
          PatientDatabaseService.name
        );
        return {
          rows: [],
          total_rows: 0,
          offset: 0,
        };
      });
  }
}
