import { createReducer, on } from '@ngrx/store';
import {
  addMedicationRequest,
  deleteMedicationRequest,
  getCurrentIntervalMedicationRequests,
  setMedicationRequests,
  updateMedicationRequest,
} from '../actions/medication-request.actions';
import { MedicationRequest } from 'fhir/r4';
import { isWithinInterval } from 'date-fns';

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
  on(getCurrentIntervalMedicationRequests, (state, { date }) =>
    state.filter((medicationRequest) =>
      medicationRequest.dosageInstruction.find((dosage) =>
        isWithinInterval(date, {
          start: new Date(dosage.timing.repeat.boundsPeriod.start),
          end: new Date(dosage.timing.repeat.boundsPeriod.end),
        })
      )
    )
  ),
  on(updateMedicationRequest, (state, { id, medicationRequest }) => state),
  on(deleteMedicationRequest, (state, { id }) =>
    state.filter((medicationRequest) => medicationRequest.id !== id)
  )
);
