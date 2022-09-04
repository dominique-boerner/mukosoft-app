import { Observable } from "rxjs";
import { Patient } from "fhir/r4";

export interface ISettingsService {
  /**
   * Return the current user.
   */
  getPatient(): Observable<Patient>;

  /**
   * Return the name of the current user.
   */
  getPatientName(): Observable<string>;

  /**
   * Return the avatar of the current user.
   */
  getPatientAvatar(): Observable<string>;

  /**
   * Update the current user in the database and set the state on success.
   * @param newPatient
   */
  updatePatient(newPatient: Patient): void;
}
