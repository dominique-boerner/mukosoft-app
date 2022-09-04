import { Component } from "@angular/core";
import { SettingsService } from "./services/settings-service/settings-service";
import { Patient } from "fhir/r4";

// @ts-ignore
import versionJson from "version.json";

@Component({
  selector: "mukosoft-settings-page",
  templateUrl: "settings.page.html",
})
export class SettingsPage {
  public readonly nameLabel = "name";
  public readonly birthdateLabel = "birthdate";

  public name = this.settingsService.getPatientName();
  public profileImage = this.settingsService.getPatientAvatar();
  public birthDate: any = null;
  public appVersion = versionJson.version;

  private newName = "";

  constructor(private readonly settingsService: SettingsService) {}

  save() {
    this.settingsService
      .getPatient()
      .subscribe((patient) => {
        const newPatient: Patient = {
          ...patient,
          name: [
            {
              use: "nickname",
              text: this.newName,
            },
          ],
        };
        this.settingsService.updatePatient(newPatient);
      })
      .unsubscribe();
  }

  setNewName(name: string) {
    this.newName = name;
  }
}
