import { AppState } from '../state/app-state';
import { isWithinInterval } from 'date-fns';
import { createSelector } from '@ngrx/store';
import { MedicationRequest } from 'fhir/r4';

export const selectMedicationRequests = (state: AppState) => {
  return state.medicationRequests;
};

export const selectCurrentIntervalMedicationRequests = createSelector(
  selectMedicationRequests,
  (medicationRequests: MedicationRequest[]) => {
    if (medicationRequests && medicationRequests.length > 0) {
      return medicationRequests.filter((medicationRequest) =>
        medicationRequest.dosageInstruction.find((dosage) =>
          isWithinInterval(new Date(), {
            start: new Date(dosage.timing.repeat.boundsPeriod.start),
            end: new Date(dosage.timing.repeat.boundsPeriod.end),
          })
        )
      );
    } else {
      return [];
    }
  }
);
