import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Logger } from "../../core/util/logger/logger";
import { medicationFormCodings } from "../../core/medication-form-codings";
import { Coding } from "fhir/r4";
import { LocalNotifications } from "@awesome-cordova-plugins/local-notifications/ngx";

@Component({
  selector: "mukosoft-create-medication",
  templateUrl: "./create-medication.component.html",
})
export class CreateMedicationComponent {
  public readonly medicationFormCodings = medicationFormCodings;
  public formGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.nullValidator]),
    amount: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.pattern("^[0-9]*$"),
    ]),
    medicationForm: new FormControl<Coding>(medicationFormCodings[0], [
      Validators.required,
    ]),
    times: new FormControl<Date[]>([], [Validators.required]),
  });

  constructor(private readonly localNotifications: LocalNotifications) {}

  public saveClick() {
    const formGroupControls = this.formGroup.controls;
    const medicationName = formGroupControls.name.value;
    const amount = formGroupControls.amount.value;
    const times = formGroupControls.times.value;
    Logger.info(`Medication ${amount}x ${medicationName}, Times: ${times}`);
    if (!this.formGroup.touched || this.formGroup.dirty) {
      Logger.info(`Isdirty`);
    }
    this.localNotifications.schedule({
      id: 1,
      text: "Single ILocalNotification",
      data: {
        secret: `Medication ${amount}x ${medicationName}, Times: ${times}`,
      },
    });
  }

  addTime(time: Date) {
    const times = this.formGroup.controls.times.value;
    const sortedTimes = [...times, time].sort((a: Date, b: Date) => {
      return a.getTime() - b.getTime();
    });
    this.formGroup.controls.times.setValue(sortedTimes);
  }

  removeTime(time: Date) {
    const times = this.formGroup.controls.times.value;
    this.formGroup.controls.times.setValue(times.filter((t) => t !== time));
  }
}
