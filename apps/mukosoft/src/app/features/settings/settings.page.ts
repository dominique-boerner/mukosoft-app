import { Component } from "@angular/core";
import { SettingsService } from "./services/settings-service/settings-service";
import { Patient } from "fhir/r4";

// @ts-ignore
import packageJson from "package.json";

@Component({
  selector: "mukosoft-settings-page",
  templateUrl: "settings.page.html",
})
export class SettingsPage {
  public readonly nameLabel = "name";
  public readonly birthdateLabel = "birthdate";

  public readonly name = this.settingsService.getPatientName();
  public readonly profileImage = this.settingsService.getPatientAvatar();
  public readonly birthDate = new Date();

  public readonly appVersion = packageJson.version;

  private newName = "";

  constructor(private readonly settingsService: SettingsService) {}

  public save() {
    this.settingsService
      .getPatient()
      .subscribe((patient) => {
        const newPatient = this.generateNewPatient(patient);
        this.settingsService.updatePatient(newPatient);
      })
      .unsubscribe();
  }

  public setNewName(name: string) {
    this.newName = name;
  }

  private generateNewPatient(currentPatient: Patient): Patient {
    return {
      ...currentPatient,
      name: [
        {
          use: "nickname",
          text: this.newName,
        },
      ],
    };
  }
}
