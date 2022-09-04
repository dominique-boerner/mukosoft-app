import { Injectable } from "@angular/core";
import { PatientService } from "../../../../core/services/patient-service/patient.service";
import { Observable } from "rxjs";
import { PatientDatabaseService } from "../../../../core/services/patient-database-service/patient-database.service";
import { Patient } from "fhir/r4";
import { Logger } from "../../../../core/util/logger/logger";
import { ISettingsService } from "./settings-service.interface";

/**
 * SettingsService
 * Service which contains logic from the SettingsPage.
 * @see SettingsPage
 */
@Injectable({
  providedIn: "root",
})
export class SettingsService implements ISettingsService {
  constructor(
    private readonly patientService: PatientService,
    private readonly patientDatabaseService: PatientDatabaseService
  ) {}

  public getPatient(): Observable<Patient> {
    return this.patientService.getPatient();
  }

  public getPatientName(): Observable<string> {
    return this.patientService.getPatientName();
  }

  public getPatientAvatar(): Observable<string> {
    return this.patientService.getPatientAvatar();
  }

  public updatePatient(newPatient: Patient) {
    this.patientDatabaseService
      .updatePatient(newPatient)
      .then((patient) => this.patientService.setPatient(patient))
      .catch(() =>
        Logger.error("Error while updating patient.", SettingsService.name)
      );
  }
}
