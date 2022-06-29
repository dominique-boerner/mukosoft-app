import { MedicationRequest } from 'fhir/r4';

export interface AppState {
  medicationRequests: MedicationRequest[];
}
