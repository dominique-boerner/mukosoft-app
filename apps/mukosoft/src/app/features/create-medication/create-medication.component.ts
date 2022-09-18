import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Logger } from "../../core/util/logger/logger";
import { medicationFormCodings } from "../../core/medication-form-codings";
import { Coding, MedicationRequest } from "fhir/r4";
import { MedicationService } from "../../core/services/medication-service/medication.service";
import { MedicationRequestService } from "../../core/services/medication-request-service/medication-request.service";

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
    amount: new FormControl<number>(1, [
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

  constructor(
    private readonly medicationService: MedicationService,
    private readonly medicationRequestService: MedicationRequestService
  ) {}

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
      this.formGroup.controls.name.reset();
      this.formGroup.controls.amount.setValue(1);
      const response = await this.medicationService.createMedication(
        medicationName
      );

      if (response.ok) {
        const medicationReferenceId = response.id;
        console.log(medicationReferenceId);
        const medicationRequest: MedicationRequest = {
          id: "1234",
          status: "active",
          subject: {
            reference: "User",
          },
          resourceType: "MedicationRequest",
          intent: "plan",
          medicationReference: {
            reference: `#${medicationReferenceId}`,
          },
          dosageInstruction: [
            {
              sequence: 1,
              text: "0.25mg PO every 6-12 hours as needed for menses from Jan 15-20, 2015.  Do not exceed more than 4mg per day",
              additionalInstruction: [
                {
                  coding: [
                    {
                      system: "http://snomed.info/sct",
                      code: "418914006",
                      display:
                        "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)",
                    },
                  ],
                },
              ],
              timing: {
                repeat: {
                  boundsPeriod: {
                    start: "2020-01-15",
                    end: "2025-01-20",
                  },
                  frequency: 1,
                  period: 6,
                  periodMax: 12,
                  periodUnit: "h",
                },
              },
              asNeededCodeableConcept: {
                coding: [
                  {
                    system: "http://snomed.info/sct",
                    code: "266599000",
                    display: "Dysmenorrhea (disorder)",
                  },
                ],
              },
              route: {
                coding: [
                  {
                    system: "http://snomed.info/sct",
                    code: "26643006",
                    display: "Oral Route",
                  },
                ],
              },
              doseAndRate: [
                {
                  type: {
                    coding: [
                      {
                        system:
                          "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                        code: "ordered",
                        display: "Ordered",
                      },
                    ],
                  },
                  doseQuantity: {
                    value: 1,
                    unit: "TAB",
                    system:
                      "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                    code: "TAB",
                  },
                },
              ],
              maxDosePerAdministration: {
                value: 4,
                unit: "mg",
                system: "http://unitsofmeasure.org",
                code: "mg",
              },
            },
          ],
        };
        this.medicationRequestService.createMedicationRequest(
          medicationRequest
        );
      }
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
