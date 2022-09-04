import { TestBed } from "@angular/core/testing";

import { MedicationRequestService } from "./medication-request.service";
import { mockMedicationRequestPrednisoneNonActive } from "../../../../__mocks__/mock-medication-request";
import { StoreModule } from "@ngrx/store";
import { appState } from "../../../../app.module";

describe("MedicationRequestService", () => {
  let service: MedicationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appState)],
    });
    service = TestBed.inject(MedicationRequestService);
  });

  describe("CRUD of MedicationRequest", () => {
    xit("should create a medicationRequest", () => {
      service.createMedicationRequest(mockMedicationRequestPrednisoneNonActive);
      expect(service.error$.value.error).toBeFalsy();
    });

    it("should get all medicaationRequests", () => {
      service.getMedicationRequests();
      expect(service.error$.value.error).toBeFalsy();
    });

    xit("should update a medicationRequest", () => {
      service.updateMedicationRequest(
        "#med103",
        mockMedicationRequestPrednisoneNonActive
      );
      expect(service.error$.value.error).toBeFalsy();
    });

    xit("should delete a medicationRequest", () => {
      service.deleteMedicationRequest("#med103");
      expect(service.error$.value.error).toBeFalsy();
    });
  });
});
