import { Component, Input } from "@angular/core";
import { Medication } from "fhir/r4";

@Component({
  selector: "mukosoft-medication-name",
  templateUrl: "./medication-name.component.html",
})
export class MedicationNameComponent {
  @Input()
  medication: Medication;
}
