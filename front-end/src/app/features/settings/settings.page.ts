import { Component } from '@angular/core';
import { SettingsService } from './services/settings-service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
})
export class SettingsPage {
  readonly nameLabel = 'name';
  readonly birthdateLabel = 'birthdate';

  name = this.settingsService.getPatientName();
  profileImage = this.settingsService.getPatientAvatar();
  birthDate: any = null;

  constructor(private readonly settingsService: SettingsService) {}
}
