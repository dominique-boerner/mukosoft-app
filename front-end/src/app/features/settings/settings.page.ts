import { Component } from '@angular/core';
import { SettingsService } from './services/settings-service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
})
export class SettingsPage {
  private readonly initialName = this.settingsService.getPatientName();
  private readonly initialBirthdate = null;

  name = this.settingsService.getPatientName();
  profileImage = this.settingsService.getPatientAvatar();

  birthDate = null;

  hasChangedSomething = false;

  constructor(private readonly settingsService: SettingsService) {}

  setName(name: string) {
    // this.name = name;
    this.setHasChangedSomething();
  }

  setBirthdate() {
    this.setHasChangedSomething();
  }

  private setHasChangedSomething() {
    this.hasChangedSomething = !(
      this.name === this.initialName &&
      this.initialBirthdate === this.initialBirthdate
    );
  }
}
