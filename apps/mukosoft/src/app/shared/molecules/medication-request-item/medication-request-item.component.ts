import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Medication, MedicationRequest } from "fhir/r4";
import { MukoSoftIcons } from "../../../../theme/icons";

@Component({
  selector: "mukosoft-medication-request-item",
  templateUrl: "./medication-request-item.component.html",
})
export class MedicationRequestItemComponent {
  readonly icons = MukoSoftIcons;
  readonly iconSize = "text-xl";

  @Input()
  medication: Medication;

  @Input()
  medicationRequest: MedicationRequest;

  @Output()
  onRemoveClick = new EventEmitter<string>();
}
