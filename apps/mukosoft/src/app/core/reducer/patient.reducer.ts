import { createReducer, on } from '@ngrx/store';
import { Patient } from 'fhir/r4';
import { setPatient } from '../actions/patient.action';

const initialState: Patient = {
  resourceType: 'Patient',
};

export const patientReducer = createReducer<Patient>(
  initialState,
  on(setPatient, (state, { patient }) => patient)
);
