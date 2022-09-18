import { Component, OnInit } from "@angular/core";
import { PatientService } from "../../core/services/patient-service/patient.service";
import { NewsService } from "./services/news.service";
import { MedicationRequestService } from "../../core/services/medication-request-service/medication-request.service";
import { MedicationService } from "../../core/services/medication-service/medication.service";
import { Medication, MedicationRequest } from "fhir/r4";

@Component({
  selector: "mukosoft-home-page",
  templateUrl: "home-page.component.html",
})
export class HomePageComponent implements OnInit {
  readonly news = this.newsService.getNews();

  readonly name = this.patientService.getPatientName();
  readonly profileImage = this.patientService.getPatientAvatar();

  readonly medicationRequests$ =
    this.medicationRequestService.getMedicationRequests();

  constructor(
    private readonly patientService: PatientService,
    private readonly newsService: NewsService,
    private readonly medicationRequestService: MedicationRequestService,
    private readonly medicationService: MedicationService
  ) {}

  ngOnInit() {
    this.medicationRequestService.synchronizeMedicationRequestsWithDatabase();
  }

  getMedicationByReference(
    medicationRequest: MedicationRequest
  ): Medication | undefined {
    console.log(
      this.medicationService.getMedicationByReference(
        medicationRequest.medicationReference.reference
      )
    );
    return this.medicationService.getMedicationByReference(
      medicationRequest.medicationReference.reference
    );
  }
}
