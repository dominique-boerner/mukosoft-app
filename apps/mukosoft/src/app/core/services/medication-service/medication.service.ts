import { Injectable } from "@angular/core";
import { Medication } from "fhir/r4";
import { BehaviorSubject } from "rxjs";
import { IMedicationService } from "./medication-service.interface";
import { UuidService } from "../uuid-service/uuid.service";
import { Logger } from "../../util/logger/logger";
import { MedicationDatabaseService } from "../medication-database-service/medication-database.service";

@Injectable({
  providedIn: "root",
})
export class MedicationService implements IMedicationService {
  private medications$ = new BehaviorSubject<Medication[]>([]);

  constructor(
    private readonly uuidService: UuidService,
    private readonly medicationDatabaseService: MedicationDatabaseService
  ) {
    this.loadAllMedications();
  }

  public getMedicationByReference(medicationReference: string) {
    return this.medications$.value.find((medication) => {
      console.log(medication);
      const searchString = medicationReference.replace("#", "");
      return medication?.id?.includes(searchString);
    });
  }

  public createMedication(display: string) {
    const medication: Medication = {
      resourceType: "Medication",
      id: this.uuidService.generateUuid(),
      code: {
        coding: [
          {
            display,
          },
        ],
      },
    };

    Logger.info(
      `Medication created: ${JSON.stringify(medication)}`,
      MedicationService.name
    );

    return this.putMedication(medication);
  }

  public async putMedication(medication: Medication) {
    return this.medicationDatabaseService.put(medication);
  }

  private loadAllMedications() {
    this.medicationDatabaseService.get().then((response) => {
      this.setMedications(response.rows.map((row: any) => row.doc));
    });
  }

  private setMedications(medications: Medication[]) {
    this.medications$.next(medications);
  }
}
