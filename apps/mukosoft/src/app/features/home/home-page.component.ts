import { Component } from "@angular/core";
import { PatientService } from "../../core/services/patient-service/patient.service";

@Component({
  selector: "mukosoft-home-page",
  templateUrl: "home-page.component.html",
})
export class HomePageComponent {
  name = this.patientService.getPatientName();
  profileImage = this.patientService.getPatientAvatar();

  constructor(private readonly patientService: PatientService) {}
}
