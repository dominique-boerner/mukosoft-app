import { Medication } from "fhir/r4";

export interface IMedicationService {
  /**
   * Get a specific medication by its reference, which is MedicationRequest.id.
   * @param medicationReference
   */
  getMedicationByReference: (
    medicationReference: string
  ) => Medication | undefined;
}
