import { createReducer, on } from '@ngrx/store';
import { Patient } from 'fhir/r4';
import { setPatient, setPatientName } from '../actions/patient.action';

const initialState: Patient = {
  resourceType: 'Patient',
};

export const patientReducer = createReducer<Patient>(
  initialState,
  on(setPatient, (state, { patient }) => patient),
  on(setPatientName, (state, { name }) => {
    const remainingNames = state.name.filter(
      (patientName) => patientName.use !== name.use
    );
    return {
      ...state,
      name: [...remainingNames, name],
    };
  })
);
