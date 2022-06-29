import { Inject, Injectable } from '@angular/core';
import { MedicationRequest } from 'fhir/r4';
import { UuidService } from '../../../../core/services/uuid-service/uuid.service';
import { AbstractDatabaseService } from '../../abstract/AbstractDatabaseService';
import { Logger } from '../../../../core/util/logger';

@Injectable({
  providedIn: 'root',
})
export class MedicationRequestDatabaseService extends AbstractDatabaseService {
  constructor(@Inject(UuidService) uuidService: UuidService) {
    super(uuidService, 'crm_medicationRequests');
  }

  putMedicationRequest(
    medicationRequest: MedicationRequest
  ): Promise<MedicationRequest> {
    return this.db
      .put<MedicationRequest>({
        ...medicationRequest,
        _id: medicationRequest.id,
      })
      .then((response) => {
        Logger.success(
          `successfully added medicationRequest with id ${medicationRequest.id}`,
          MedicationRequestDatabaseService.name
        );
        return response;
      })
      .catch((error) => {
        Logger.error(
          `Error while adding medicationRequest: ${error}`,
          MedicationRequestDatabaseService.name
        );
        return error;
      });
  }

  getMedicationRequests() {
    return this.db
      .allDocs<MedicationRequest>({ include_docs: true, attachments: true })
      .then((response) => {
        Logger.success(
          `successfully loaded ${response.total_rows} medicationRequests`,
          MedicationRequestDatabaseService.name
        );
        return response;
      })
      .catch((error) => {
        Logger.error(
          `Error while loading all medicationRequests: ${error}`,
          MedicationRequestDatabaseService.name
        );
        return error;
      });
  }

  deleteMedicationRequest(id: string) {
    return this.db.get(id).then((document) => {
      return this.db
        .remove(document)
        .then(() => {
          Logger.success(
            `successfully removed medicationRequest with id ${id}`,
            MedicationRequestDatabaseService.name
          );
        })
        .catch((error) => {
          Logger.error(
            `Error while removing medicationRequest: ${error}`,
            MedicationRequestDatabaseService.name
          );
        });
    });
  }
}
