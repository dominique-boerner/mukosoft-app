import { Component } from "@angular/core";
import { NavigationItem } from "./models/navigation-item";

@Component({
  selector: "mukosoft-app-nx-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  socials: NavigationItem[] = [
    {
      name: "GitHub",
      url: "https://github.com/mukosoft/mukosoft-app",
      icon: "fi-brands-github",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mukosoftde/",
      icon: "fi-brands-instagram",
    },
  ];

  navigationItems: NavigationItem[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Kontakt",
      url: "/",
    },
    {
      name: "Impressum",
      url: "/",
    },
  ];
}
