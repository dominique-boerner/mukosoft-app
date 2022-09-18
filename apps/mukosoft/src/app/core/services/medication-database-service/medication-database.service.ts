import { Inject, Injectable } from "@angular/core";
import { AbstractDatabaseService } from "../../abstract/abstract-database-service";
import { UuidService } from "../uuid-service/uuid.service";
import { AppState } from "../../state/app-state";
import { Store } from "@ngrx/store";
import { Medication } from "fhir/r4";
import { Logger } from "../../util/logger/logger";

@Injectable({
  providedIn: "root",
})
export class MedicationDatabaseService extends AbstractDatabaseService {
  constructor(
    @Inject(UuidService) uuidService: UuidService,
    private readonly store: Store<AppState>
  ) {
    super("crm_medications");
  }

  put(medication: Medication) {
    return this.db
      .put<Medication>({
        ...medication,
        _id: medication.id,
      })
      .then((response) => {
        Logger.success(
          `successfully added medication with id ${medication.id}`,
          MedicationDatabaseService.name
        );
        return response;
      })
      .catch((error) => {
        Logger.error(
          `Error while adding medication: ${error}`,
          MedicationDatabaseService.name
        );
        return error;
      });
  }
}
