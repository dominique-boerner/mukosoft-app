import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Logger } from "../../core/util/logger/logger";
import { medicationFormCodings } from "../../core/medication-form-codings";
import { Coding } from "fhir/r4";

@Component({
  selector: "mukosoft-create-medication",
  templateUrl: "./create-medication.component.html",
})
export class CreateMedicationComponent {
  readonly medicationFormCodings = medicationFormCodings;
  name = new FormControl("", [Validators.required, Validators.nullValidator]);
  amount = new FormControl(1, [
    Validators.required,
    Validators.min(1),
    Validators.pattern("^[0-9]*$"),
  ]);
  medicationForm = new FormControl<Coding>(medicationFormCodings[0], [
    Validators.required,
  ]);
  times = new FormControl<Date[]>([new Date()], [Validators.required]);

  saveClick() {
    const medicationName = this.name.value;
    const amount = this.amount.value;
    const times = this.times.value;
    Logger.info(`Medication ${amount}x ${medicationName}, Times: ${times}`);
  }

  onDateTimeSelect(date: Date) {
    this.times.setValue([...this.times.value, date]);
    console.log(date);
  }
}
