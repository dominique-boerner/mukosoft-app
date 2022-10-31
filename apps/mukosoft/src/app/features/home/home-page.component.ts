import { Component } from "@angular/core";
import { PatientService } from "../../core/services/patient-service/patient.service";
import { NewsService } from "./services/news.service";
import { MedicationService } from "../../core/services/medication-service/medication.service";
import { Medication, MedicationRequest } from "fhir/r4";
import { MedicationRequestService } from "../../core/services/medication-request-service/medication-request.service";

@Component({
  selector: "mukosoft-home-page",
  templateUrl: "home-page.component.html",
})
export class HomePageComponent {
  public readonly news = this.newsService.getNews();

  public readonly name = this.patientService.getPatientName();

  public readonly medicationRequests$ =
    this.medicationRequestService.getMedicationRequests();

  constructor(
    private readonly patientService: PatientService,
    private readonly newsService: NewsService,
    private readonly medicationRequestService: MedicationRequestService,
    private readonly medicationService: MedicationService
  ) {}

  public getMedicationByReference(
    medicationRequest: MedicationRequest
  ): Medication {
    return this.medicationService.getMedicationByReference(
      medicationRequest.medicationReference.reference
    );
  }
}
