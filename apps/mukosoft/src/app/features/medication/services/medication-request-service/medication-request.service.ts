import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MedicationRequest } from 'fhir/r4';
import { MedicationRequestResponse } from '../../models/medication-request-response';
import { MedicationRequestError } from '../../models/medication-request-error';
import { Store } from '@ngrx/store';
import {
  selectCurrentIntervalMedicationRequests,
  selectMedicationRequests,
} from '../../../../core/selectors/medication-request.selector';
import { MedicationRequestDatabaseService } from '../medication-request-database-service/medication-request-database.service';
import { setMedicationRequests } from '../../../../core/actions/medication-request.actions';
import { MedicationCreationError } from './medication-request-errors';
import {AppState} from "../../../../core/state/app-state";

@Injectable({
  providedIn: 'root',
})
export class MedicationRequestService {
  error = new BehaviorSubject<MedicationRequestError>({ error: false });

  constructor(
    private readonly store: Store<AppState>,
    private readonly medicationRequestDatabaseService: MedicationRequestDatabaseService
  ) {}

  /**
   * Create FHIR MedicationRequest.
   * @param medicationRequest
   * @see https://www.hl7.org/fhir/medicationrequest.html
   */
  createMedicationRequest(medicationRequest: MedicationRequest) {
    return this.medicationRequestDatabaseService
      .putMedicationRequest(medicationRequest)
      .then(() => {
        this.error.next({ error: false });
        this.synchronizeMedicationRequestsWithDatabase();
        return this.error;
      })
      .catch((e) => {
        this.error.next(MedicationCreationError);
        throw MedicationCreationError;
      });
  }

  /**
   * Synchronizes the NgRx Store with the MedicationRequests from the PouchDB.
   * @see https://www.hl7.org/fhir/medicationrequest.html
   * @see MedicationRequestDatabaseService
   */
  synchronizeMedicationRequestsWithDatabase() {
    this.medicationRequestDatabaseService
      .getMedicationRequests()
      .then((response) => {
        const documents = response.rows.map((row: any) => row.doc);
        this.store.dispatch(
          setMedicationRequests({ medicationRequests: documents })
        );
      });
  }
  /**
   * Get all FHIR MedicationRequests.
   * @see https://www.hl7.org/fhir/medicationrequest.html
   */
  getMedicationRequests(): Observable<MedicationRequest[]> {
    try {
      this.setError(false, 0, '');
      return this.store.select(selectMedicationRequests)
    } catch (e: any) {
      this.setError(true, 0, e);
      return of([]);
    }
  }

  /**
   * Get all currently active FHIR MedicationRequests.
   * @see https://www.hl7.org/fhir/medicationrequest.html
   */
  getCurrentIntervalMedicationRequests(): Observable<MedicationRequest[]> {
    try {
      this.setError(false, 0, '');
      return this.store.select(selectCurrentIntervalMedicationRequests);
    } catch (e: any) {
      this.setError(true, 0, e);
      return of([]);
    }
  }

  /**
   * Updates FHIR MedicationRequest.
   * @param id
   * @param medicationRequest
   * @see https://www.hl7.org/fhir/medicationrequest.html
   */
  updateMedicationRequest(
    id: string,
    medicationRequest: MedicationRequest
  ): Observable<MedicationRequestResponse<MedicationRequest[]>> {
    try {
      // TODO: need implementation
      return of({
        success: false,
        data: [],
      });
    } catch (e) {
      return of({
        success: false,
        data: [],
      });
    }
  }

  /**
   * Delete FHIR MedicationRequest.
   * @param id
   * @see https://www.hl7.org/fhir/medicationrequest.html
   */
  deleteMedicationRequest(id: string) {
    this.medicationRequestDatabaseService
      .deleteMedicationRequest(id)
      .then(() => {
        this.error.next({ error: false });
        this.synchronizeMedicationRequestsWithDatabase();
      })
      .catch((error) => {
        this.error.next({ error: true, errorMessage: error });
      });
  }

  deleteAllMedicationRequests() {
    this.medicationRequestDatabaseService
      .deleteAllMedicationRequests()!
      .then(() => this.synchronizeMedicationRequestsWithDatabase());
  }

  private setError(error: boolean, errorCode: number, errorMessage: string) {
    this.error.next({
      error,
      errorMessage,
      errorCode,
    });
  }
}
