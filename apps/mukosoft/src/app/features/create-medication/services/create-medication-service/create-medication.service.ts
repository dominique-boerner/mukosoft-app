import { Injectable } from "@angular/core";
import { medicationFormCodings } from "../../../../core/medication-form-codings";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Coding, MedicationRequest } from "fhir/r4";
import { MedicationService } from "../../../../core/services/medication-service/medication.service";
import { MedicationRequestService } from "../../../../core/services/medication-request-service/medication-request.service";

@Injectable({
  providedIn: "root",
})
export class CreateMedicationService {
  constructor(
    private readonly medicationService: MedicationService,
    private readonly medicationRequestService: MedicationRequestService
  ) {}

  public isFormControlInvalid(formControl: FormControl) {
    return formControl.invalid;
  }

  public async createMedication(medicationName: string) {
    return await this.medicationService.createMedication(medicationName);
  }

  public async createMedicationRequest(medicationRequest: MedicationRequest) {
    return this.medicationRequestService.createMedicationRequest(
      medicationRequest
    );
  }

  public addTimeAndSort(times: Date[], time: Date): Date[] {
    return [...times, time].sort((a: Date, b: Date) => {
      return a.getTime() - b.getTime();
    });
  }

  public removeTime(times: Date[], time: Date): Date[] {
    return times.filter((t) => t !== time);
  }

  public toggleDay(days: number[], day: number): number[] {
    if (days.includes(day)) {
      return days.filter((d) => d !== day);
    } else {
      return [...days, day];
    }
  }

  public get defaultDays() {
    return [1, 2, 3, 4, 5, 6, 0];
  }

  public get defaultName(): string {
    return "";
  }

  public get defaultAmount(): number {
    return 1;
  }

  public get defaultMedicationForm(): Coding {
    return this.medicationFormCodings[0];
  }

  public get defaultTimes(): Date[] {
    return [];
  }

  public get medicationFormCodings() {
    return medicationFormCodings;
  }

  public get defaultFormControlGroup() {
    return new FormGroup({
      name: new FormControl(this.defaultName, this.nameValidator),
      amount: new FormControl<number>(this.defaultAmount, this.amountValidator),
      medicationForm: new FormControl<Coding>(
        this.defaultMedicationForm,
        this.medicationFormValidator
      ),
      times: new FormControl<Date[]>(this.defaultTimes, this.timesValidator),
      days: new FormControl<number[]>(
        [...this.defaultDays],
        this.daysValidator
      ),
    });
  }

  private get medicationFormValidator() {
    return [Validators.required];
  }

  private get timesValidator() {
    return [Validators.required];
  }

  private get daysValidator() {
    return [Validators.required];
  }

  private get nameValidator() {
    return [
      Validators.required,
      Validators.nullValidator,
      Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$"),
    ];
  }

  private get amountValidator() {
    return [
      Validators.required,
      Validators.min(1),
      Validators.pattern("^[0-9]*$"),
    ];
  }
}
