import { MedicationRequest } from "fhir/r4";

export const mockMedication: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "foo",
  status: "active",
  intent: "plan",
  subject: {
    id: "foo",
  },
  medicationReference: {
    id: "acc",
    display: "ACC 600mg",
  },
  dosageInstruction: [
    {
      timing: {
        repeat: {
          timeOfDay: ["08:00:00", "12:00:00", "18:00:00"],
          dayOfWeek: ["mon", "thu", "fri", "sat", "sun", "tue", "wed"],
          // todo: for periodic medications
          boundsPeriod: {},
        },
      },
      doseAndRate: [
        {
          doseQuantity: {
            value: 600,
            unit: "mg",
          },
        },
      ],
    },
  ],
};
