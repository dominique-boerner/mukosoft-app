import { Component, Input } from '@angular/core';
import { Medication } from 'fhir/r4';

@Component({
  selector: 'mukosoft-app-nx-medication',
  templateUrl: './medication.component.html',
})
export class MedicationComponent {
  @Input()
  medication: Medication;
}
