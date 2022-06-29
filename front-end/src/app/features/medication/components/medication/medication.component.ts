import { Component, Input } from '@angular/core';
import { Medication } from 'fhir/r4';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
})
export class MedicationComponent {
  @Input()
  medication: Medication;
}
