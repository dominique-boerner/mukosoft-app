import { TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";
import { appState } from "../../../../app.module";
import { MedicationService } from "./medication.service";
import { mockMedications } from "../../../../__mocks__/medications";
import { prednisone } from "../../../../__mocks__/mock-medication";

describe("MedicationService", () => {
  let service: MedicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appState)],
    });
    service = TestBed.inject(MedicationService);
  });

  it("should get medication by reference", () => {
    (service as any).medications$.next(mockMedications);
    const foundMedication = service.getMedicationByReference(prednisone.id);
    expect(foundMedication).toEqual(prednisone);
  });
});
