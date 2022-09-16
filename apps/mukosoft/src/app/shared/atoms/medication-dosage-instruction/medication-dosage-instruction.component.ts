import { Component, Input } from "@angular/core";
import { Dosage } from "fhir/r4";

@Component({
  selector: "mukosoft-medication-dosage-instruction",
  templateUrl: "./medication-dosage-instruction.component.html",
})
export class MedicationDosageInstructionComponent {
  @Input()
  dosageInstruction: Dosage;
}
