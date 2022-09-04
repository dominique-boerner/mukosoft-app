import { Injectable } from "@angular/core";
import { Medication } from "fhir/r4";
import { BehaviorSubject } from "rxjs";
import { prednisone } from "../../../../__mocks__/mock-medication";
import { IMedicationService } from "./medication-service.interface";

@Injectable({
  providedIn: "root",
})
export class MedicationService implements IMedicationService {
  private medications$ = new BehaviorSubject<Medication[]>([]);

  constructor() {
    this.loadAllMedications();
  }

  public getMedicationByReference(
    medicationReference: string
  ): Medication | undefined {
    return this.medications$.value.find((medications) => {
      const searchString = medicationReference.replace("#", "");
      return medications?.id?.includes(searchString);
    });
  }

  private loadAllMedications() {
    this.setMedications([prednisone]);
  }

  private setMedications(medications: Medication[]) {
    this.medications$.next(medications);
  }
}
