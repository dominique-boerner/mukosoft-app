import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Logger } from "../../core/util/logger/logger";
import { medicationFormCodings } from "../../core/medication-form-codings";
import { Coding } from "fhir/r4";
import { MedicationService } from "../../core/services/medication-service/medication.service";

@Component({
  selector: "mukosoft-create-medication",
  templateUrl: "./create-medication.component.html",
})
export class CreateMedicationComponent {
  public days: number[] = [1, 2, 3, 4, 5, 6, 0];
  public isDaily = true;

  public readonly medicationFormCodings = medicationFormCodings;
  public formGroup = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.nullValidator,
      Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$"),
    ]),
    amount: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.pattern("^[0-9]*$"),
    ]),
    medicationForm: new FormControl<Coding>(medicationFormCodings[0], [
      Validators.required,
    ]),
    times: new FormControl<Date[]>([], [Validators.required]),
    days: new FormControl<number[]>([...this.days], [Validators.required]),
  });

  constructor(private readonly medicationService: MedicationService) {}

  public async saveClick() {
    const formGroupControls = this.formGroup.controls;
    const medicationName = formGroupControls.name.value;
    const amount = formGroupControls.amount.value;
    const times = formGroupControls.times.value;
    const days = formGroupControls.days.value;
    if (!this.isNameInvalid() && !this.isAmountInvalid()) {
      Logger.info(
        `Medication ${amount}x ${medicationName}, Times: ${times}, Days: ${days}`
      );
      await this.medicationService.createMedication(medicationName);
    }
  }

  public addTime(time: Date) {
    const times = this.formGroup.controls.times.value;
    const sortedTimes = [...times, time].sort((a: Date, b: Date) => {
      return a.getTime() - b.getTime();
    });
    this.formGroup.controls.times.setValue(sortedTimes);
  }

  public removeTime(time: Date) {
    const times = this.formGroup.controls.times.value;
    this.formGroup.controls.times.setValue(times.filter((t) => t !== time));
  }

  public toggleDay(day: number) {
    const formGroupDays = this.formGroup.controls.days;
    const currentDays = this.formGroup.controls.days.value;
    if (currentDays.includes(day)) {
      formGroupDays.setValue(currentDays.filter((d) => d !== day));
    } else {
      formGroupDays.setValue([...currentDays, day]);
    }
  }

  private isNameInvalid() {
    return this.formGroup.controls.name.invalid;
  }

  private isAmountInvalid() {
    return this.formGroup.controls.amount.invalid;
  }
}
