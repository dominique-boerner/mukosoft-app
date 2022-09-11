import { Component } from "@angular/core";
import { PatientService } from "../../core/services/patient-service/patient.service";
import { News } from "./models/news";

@Component({
  selector: "mukosoft-home-page",
  templateUrl: "home-page.component.html",
})
export class HomePageComponent {
  readonly sliderOptions = {
    loop: true,
    autoplay: true,
  };

  readonly currentNews: News[] = [
    {
      title: "13. Leipziger Mukolauf",
      text: "Hier kann jeder mitlaufen, gehen oder walken -egal ob klein oder groß -egal ob schnell oder ganz ganz langsam.",
      img: "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "https://www.muko-leipzig.de/Leipziger-Mukolauf/",
    },
    {
      title: "Hybride Selbsthilfetagung 2-2022",
      text: "Hier kann jeder mitlaufen, gehen oder walken -egal ob klein oder groß -egal ob schnell oder ganz ganz langsam.",
      img: "https://images.pexels.com/photos/1004014/pexels-photo-1004014.jpeg?auto=compress&cs=tinysrgb&w=1600",
      url: "https://www.muko-leipzig.de/Leipziger-Mukolauf/",
    },
  ];

  readonly name = this.patientService.getPatientName();
  readonly profileImage = this.patientService.getPatientAvatar();

  constructor(private readonly patientService: PatientService) {}

  openLink(url: string) {
    window.open(url, "_system", "location=yes");
  }
}
