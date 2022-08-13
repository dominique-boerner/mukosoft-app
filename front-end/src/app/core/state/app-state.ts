import { MedicationRequest, Patient } from 'fhir/r4';

export interface AppState {
  medicationRequests: MedicationRequest[];
  patient: Patient;
}
