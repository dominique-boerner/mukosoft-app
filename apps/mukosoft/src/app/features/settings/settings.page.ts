import { Component } from '@angular/core';
import { SettingsService } from './services/settings-service';
import { Patient } from 'fhir/r4';

@Component({
  selector: 'mukosoft-settings-page',
  templateUrl: 'settings.page.html',
})
export class SettingsPage {
  readonly nameLabel = 'name';
  readonly birthdateLabel = 'birthdate';

  name = this.settingsService.getPatientName();
  profileImage = this.settingsService.getPatientAvatar();
  birthDate: any = null;

  newName = '';

  constructor(private readonly settingsService: SettingsService) {}

  save() {
    this.settingsService
      .getPatient()
      .subscribe((patient) => {
        const newPatient: Patient = {
          ...patient,
          name: [
            {
              use: 'nickname',
              text: this.newName,
            },
          ],
        };
        this.settingsService.save(newPatient);
      })
      .unsubscribe();
  }

  setNewName(name: string) {
    this.newName = name;
  }
}
