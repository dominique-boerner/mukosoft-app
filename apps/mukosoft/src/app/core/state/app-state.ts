import { MedicationRequest, Patient } from "fhir/r4";
import { GlobalError } from "../exception/global-error.interface";

export interface AppState {
  medicationRequests: MedicationRequest[];
  patient: Patient;
  error: GlobalError;
}
