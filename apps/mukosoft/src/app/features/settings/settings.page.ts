import { Component } from '@angular/core';
import { SettingsService } from './services/settings-service';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app-state';
import { setPatientName } from '../../core/actions/patient.action';
import { HumanName } from 'fhir/r4';

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

  constructor(
    private readonly settingsService: SettingsService,
    private readonly store: Store<AppState>
  ) {}

  save() {
    const name: HumanName = {
      use: 'nickname',
      text: this.newName,
    };

    this.settingsService.setPatientName(name);
  }

  setNewName(name: string) {
    this.newName = name;
  }
}
