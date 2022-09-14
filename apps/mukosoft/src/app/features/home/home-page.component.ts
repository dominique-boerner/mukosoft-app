import { Component } from "@angular/core";
import { PatientService } from "../../core/services/patient-service/patient.service";
import { NewsService } from "./services/news.service";

@Component({
  selector: "mukosoft-home-page",
  templateUrl: "home-page.component.html",
})
export class HomePageComponent {
  readonly news = this.newsService.getNews();

  readonly name = this.patientService.getPatientName();
  readonly profileImage = this.patientService.getPatientAvatar();

  constructor(
    private readonly patientService: PatientService,
    private readonly newsService: NewsService
  ) {}
}
