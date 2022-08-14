import { AppState } from '../state/app-state';
import { createSelector } from '@ngrx/store';
import { Patient } from 'fhir/r4';

export const AVATAR_IDENTIFIER = 'avatar';

export const selectPatientState = (state: AppState) => {
  return state.patient;
};

export const selectPatientAvatar = createSelector(
  selectPatientState,
  (patient: Patient) =>
    patient
      ? patient?.photo?.find((p) => p.title === AVATAR_IDENTIFIER).url
      : ''
);

export const selectPatientName = createSelector(
  selectPatientState,
  (patient: Patient) =>
    patient ? patient?.name?.find((p) => p.use === 'nickname').text : ''
);
