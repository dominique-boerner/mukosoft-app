import { Component } from "@angular/core";
import { Logger } from "../../core/util/logger/logger";
import {
  DayOfWeek,
  MedicationRequestBuilderService,
} from "../../core/services/medication-request-builder/medication-request-builder.service";
import { CreateMedicationService } from "./services/create-medication-service/create-medication.service";
import { Router } from "@angular/router";

@Component({
  selector: "mukosoft-create-medication",
  templateUrl: "./create-medication.component.html",
})
export class CreateMedicationComponent {
  public isDaily = true;

  public readonly medicationFormCodings =
    this.createMedicationService.medicationFormCodings;

  public formGroup = this.createMedicationService.defaultFormControlGroup;

  constructor(
    private readonly medicationRequestBuilderService: MedicationRequestBuilderService,
    public readonly createMedicationService: CreateMedicationService,
    private readonly router: Router
  ) {}

  public async saveClick() {
    const formGroupControls = this.formGroup.controls;
    const medicationName = formGroupControls.name.value;
    const amount = formGroupControls.amount.value;
    const times = formGroupControls.times.value;
    const days = formGroupControls.days.value;

    if (this.isFormValid()) {
      Logger.info(
        `Medication ${amount}x ${medicationName}, Times: ${times}, Days: ${days}`
      );
      const response = await this.createMedicationService.createMedication(
        medicationName
      );

      if (response.ok) {
        const medicationReferenceId = response.id;

        const medicationRequest = this.medicationRequestBuilderService
          .medicationReference(medicationReferenceId)
          .daysOfWeek(days)
          .time(times)
          .build();

        await this.createMedicationService.createMedicationRequest(
          medicationRequest
        );

        this.resetForm();
        this.router.navigate(["/tabs/medications"]);
      }
    } else {
      this.formGroup.controls.name.markAsDirty();
      if (
        this.createMedicationService.isFormControlInvalid(
          this.formGroup.controls.name
        )
      ) {
        this.formGroup.controls.name.markAsDirty();
      }

      if (
        this.createMedicationService.isFormControlInvalid(
          this.formGroup.controls.amount
        )
      ) {
        this.formGroup.controls.amount.markAsDirty();
      }
    }
  }

  public addTime(time: Date) {
    this.formGroup.controls.times.setValue(
      this.createMedicationService.addTimeAndSort(
        this.formGroup.controls.times.value,
        time
      )
    );
  }

  public removeTime(time: Date) {
    this.formGroup.controls.times.setValue(
      this.createMedicationService.removeTime(
        this.formGroup.controls.times.value,
        time
      )
    );
  }

  public toggleDay(day: DayOfWeek) {
    this.formGroup.controls.days.setValue(
      this.createMedicationService.toggleDay(
        this.formGroup.controls.days.value,
        day
      )
    );
  }

  private isFormValid() {
    return (
      !this.createMedicationService.isFormControlInvalid(
        this.formGroup.controls.name
      ) &&
      !this.createMedicationService.isFormControlInvalid(
        this.formGroup.controls.amount
      )
    );
  }

  private resetForm() {
    this.formGroup = this.createMedicationService.defaultFormControlGroup;
  }
}
