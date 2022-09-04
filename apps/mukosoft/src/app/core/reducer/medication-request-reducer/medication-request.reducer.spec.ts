import { fakeAsync, flush, TestBed, tick } from "@angular/core/testing";

import { Store, StoreModule } from "@ngrx/store";
import { appState } from "../../../app.module";
import {
  addMedicationRequest,
  deleteMedicationRequest,
  setMedicationRequests,
} from "../../actions/medication-request.actions";
import {
  mockMedicationRequestPrednisoneActive,
  mockMedicationRequestPrednisoneNonActive,
} from "../../../__mocks__/mock-medication-request";
import { AppState } from "../../state/app-state";

describe("MedicationRequestReducer", () => {
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appState)],
    });

    store = TestBed.inject(Store<AppState>);
  });

  it("should add multiple medications", () => {
    store.dispatch(
      addMedicationRequest({
        medicationRequest: mockMedicationRequestPrednisoneActive,
      })
    );

    store
      .select("medicationRequests")
      .subscribe((medicationRequests) => {
        expect(medicationRequests).toEqual([
          mockMedicationRequestPrednisoneActive,
        ]);
      })
      .unsubscribe();

    store.dispatch(
      addMedicationRequest({
        medicationRequest: mockMedicationRequestPrednisoneNonActive,
      })
    );

    store
      .select("medicationRequests")
      .subscribe((medicationRequests) => {
        expect(medicationRequests).toEqual([
          mockMedicationRequestPrednisoneActive,
          mockMedicationRequestPrednisoneNonActive,
        ]);
      })
      .unsubscribe();
  });

  it("should set medicationRequest state", () => {
    store.dispatch(
      setMedicationRequests({
        medicationRequests: [
          mockMedicationRequestPrednisoneActive,
          mockMedicationRequestPrednisoneNonActive,
        ],
      })
    );

    store.select("medicationRequests").subscribe((medicationRequests) => {
      expect(medicationRequests).toEqual([
        mockMedicationRequestPrednisoneActive,
        mockMedicationRequestPrednisoneNonActive,
      ]);
    });
  });

  it("should delete medicationRequest", fakeAsync(() => {
    store.dispatch(
      setMedicationRequests({
        medicationRequests: [
          mockMedicationRequestPrednisoneActive,
          mockMedicationRequestPrednisoneNonActive,
        ],
      })
    );

    tick();
    flush();

    store.dispatch(
      deleteMedicationRequest({ id: mockMedicationRequestPrednisoneActive.id })
    );

    store.select("medicationRequests").subscribe((medicationRequests) => {
      expect(medicationRequests).toEqual([
        mockMedicationRequestPrednisoneNonActive,
      ]);
    });

    flush();
  }));
});
