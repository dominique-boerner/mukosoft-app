import { MedicationRequestError } from "../../../features/medication/models/medication-request-error";

export const MedicationCreationError: MedicationRequestError = {
  error: true,
  errorMessage: "Fehler beim hinzufügen eines Medikaments",
  errorCode: 4000,
};
