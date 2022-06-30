import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-medication-fab',
  templateUrl: './medication-fab.component.html',
})
export class MedicationFabComponent {
  @Output()
  onMedicationAddClick = new EventEmitter<void>();

  @Output()
  onMedicationsRemoveClick = new EventEmitter<void>();

  isDevelopmentMode = !environment.production;
}
