import { Component, Input } from '@angular/core';
import { Medication, MedicationRequest } from 'fhir/r4';

@Component({
  selector: 'mukosoft-app-nx-medication-request',
  templateUrl: './medication-request.component.html',
})
export class MedicationRequestComponent {
  @Input()
  medication: Medication;

  @Input()
  medicationRequest: MedicationRequest;
}
