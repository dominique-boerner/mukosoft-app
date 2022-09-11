import { createReducer, on } from "@ngrx/store";
import {
  addMedicationRequest,
  deleteMedicationRequest,
  setMedicationRequests,
} from "../../actions/medication-request.actions";
import { MedicationRequest } from "fhir/r4";

const initialState: MedicationRequest[] = [];

export const medicationRequestReducer = createReducer<MedicationRequest[]>(
  initialState,
  on(addMedicationRequest, (state, { medicationRequest }) => [
    ...state,
    medicationRequest,
  ]),
  on(
    setMedicationRequests,
    (state, { medicationRequests }) => medicationRequests
  ),
  on(deleteMedicationRequest, (state, { id }) =>
    state.filter((medicationRequest) => medicationRequest.id !== id)
  )
);
