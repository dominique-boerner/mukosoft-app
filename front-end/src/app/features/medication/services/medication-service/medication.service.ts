import { Injectable } from '@angular/core';
import { Medication } from 'fhir/r4';
import { BehaviorSubject } from 'rxjs';
import { prednisone } from '../../__mocks__/mock-medication';

@Injectable({
  providedIn: 'root',
})
export class MedicationService {
  $medications = new BehaviorSubject<Medication[]>([]);

  constructor() {
    this.loadAllMedications();
  }

  getMedicationByReference(
    medicationReference: string
  ): Medication | undefined {
    return this.$medications.value.find((medications) => {
      const searchString = medicationReference.replace('#', '');
      return medications.id.includes(searchString);
    });
  }

  private loadAllMedications() {
    // TODO: coming from SQLite later
    this.setMedications([prednisone]);
  }

  private setMedications(medications: Medication[]) {
    this.$medications.next(medications);
  }
}
