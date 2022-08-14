import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Medication, MedicationRequest } from 'fhir/r4';

@Component({
  selector: 'app-medication-request-item',
  templateUrl: './medication-request-item.component.html',
})
export class MedicationRequestItemComponent {
  readonly editIcon = 'pencil';

  readonly deleteIcon = 'trash';
  readonly deleteIconColor = 'danger';

  readonly swipeIcon = 'chevron-back';
  readonly swipeIconColor = 'secondary';

  readonly iconSize = 'large';

  @Input()
  medication: Medication;

  @Input()
  medicationRequest: MedicationRequest;

  @Output()
  onRemoveClick = new EventEmitter<string>();
}
