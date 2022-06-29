import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-medication-fab',
  templateUrl: './medication-fab.component.html',
})
export class MedicationFabComponent {
  @Output()
  onMedicationAddClick = new EventEmitter<void>();
}
