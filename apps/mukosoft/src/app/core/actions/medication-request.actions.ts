import { createAction, props } from '@ngrx/store';
import { MedicationRequest } from 'fhir/r4';

const generateTitle = (description: string) => {
  return `[MedicationRequest] ${description}`;
};

export const addMedicationRequest = createAction(
  generateTitle('add MedicationRequest'),
  props<{ medicationRequest: MedicationRequest }>()
);

export const setMedicationRequests = createAction(
  generateTitle('set MedicationRequests'),
  props<{ medicationRequests: MedicationRequest[] }>()
);

export const getCurrentIntervalMedicationRequests = createAction(
  generateTitle('is withing interval'),
  props<{ date: Date }>()
);

export const updateMedicationRequest = createAction(
  generateTitle('update MedicationRequest'),
  props<{ id: string; medicationRequest: MedicationRequest }>()
);

export const deleteMedicationRequest = createAction(
  generateTitle('delete MedicationRequest'),
  props<{ id: string }>()
);
