import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/state/app-state';
import { selectPatientName } from '../../../../core/selectors/patient.selector';

@Component({
  selector: 'mukosoft-greeting-card',
  templateUrl: './greeting-card.component.html',
})
export class GreetingCardComponent {
  name = this.store.select(selectPatientName);

  @Output()
  onAvatarClick = new EventEmitter<void>();

  constructor(private readonly store: Store<AppState>) {
  }

}
