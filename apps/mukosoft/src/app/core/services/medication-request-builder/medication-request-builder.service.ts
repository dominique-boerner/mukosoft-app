import { Injectable } from "@angular/core";
import { MedicationRequest } from "fhir/r4";
import { UuidService } from "../uuid-service/uuid.service";

type DayOfWeek = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

@Injectable({
  providedIn: "root",
})
export class MedicationRequestBuilderService {
  medicationRequest: MedicationRequest = {
    resourceType: "MedicationRequest",
    id: this.uuidService.generateUuid(),
    status: "active",
    subject: {
      reference: "User",
    },
    intent: "plan",
  };

  constructor(private readonly uuidService: UuidService) {}

  medicationReference(medicationReference: string) {
    this.medicationRequest = {
      ...this.medicationRequest,
      medicationReference: {
        reference: `#${medicationReference}`,
      },
    };

    return this;
  }

  daysOfWeek(dayOfWeek: DayOfWeek[]) {
    this.medicationRequest = {
      ...this.medicationRequest,
      dosageInstruction: [
        {
          timing: {
            repeat: {
              dayOfWeek,
            },
          },
        },
      ],
    };

    return this;
  }

  time(times: Date[]) {
    const timeOfDay: string[] = times.map((time) => {
      const hour = String(time.getHours()).padStart(2, "0");
      const minutes = String(time.getMinutes()).padStart(2, "0");
      const seconds = "00";

      return `${hour}:${minutes}:${seconds}`;
    });

    this.medicationRequest = {
      ...this.medicationRequest,
      dosageInstruction: [
        {
          timing: {
            repeat: {
              dayOfWeek:
                this.medicationRequest.dosageInstruction[0].timing.repeat
                  .dayOfWeek,
              timeOfDay,
            },
          },
        },
      ],
    };

    return this;
  }

  build() {
    return this.medicationRequest;
  }
}
