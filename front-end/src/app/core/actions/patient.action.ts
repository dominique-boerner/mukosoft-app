import { createAction, props } from '@ngrx/store';
import { MedicationRequest, Patient } from 'fhir/r4';

const generateTitle = (description: string) => {
  return `[Patient] ${description}`;
};

export const setPatient = createAction(
  generateTitle('set Patient'),
  props<{ patient: Patient }>()
);
