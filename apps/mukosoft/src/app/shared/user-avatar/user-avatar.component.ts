import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app-state';
import { selectPatientAvatar } from '../../core/selectors/patient.selector';

@Component({
  selector: 'mukosoft-user-avatar',
  templateUrl: './user-avatar.component.html',
})
export class UserAvatarComponent {
  readonly avatarUrl = this.store.select(selectPatientAvatar);

  @Input()
  imageUpload = false;

  constructor(private readonly store: Store<AppState>) {}
}
