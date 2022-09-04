import { MedicationRequest } from "fhir/r4";

export const mockMedicationRequestPrednisoneNonActive: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0306",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource &quot;medrx0305&quot; </p></div><p><b>identifier</b>: id: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: <a name="med0314"> </a></p><blockquote><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource &quot;med0314&quot; </p></div><p><b>code</b>: Alprazolam 0.25mg Oral Tablet <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.1.0/CodeSystem-v3-rxNorm.html">RxNorm</a>#308047)</span></p></blockquote><p><b>subject</b>: <a href="patient-pat1.html">Patient/pat1: Donald Duck</a> &quot;Duck DONALD&quot;</p><p><b>encounter</b>: <a href="encounter-f001.html">Encounter/f001: encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 2015-01-15</p><p><b>requester</b>: <a href="practitioner-f007.html">Practitioner/f007: Patrick Pump</a> &quot;Simone HEPS&quot;</p><blockquote><p><b>dispenseRequest</b></p><p><b>validityPeriod</b>: 2015-01-15 --&gt; 2016-01-15</p><p><b>numberOfRepeatsAllowed</b>: 1</p><p><b>quantity</b>: 30 TAB<span style="background: LightGoldenRodYellow"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = \'Tablet\')</span></p></blockquote><h3>Substitutions</h3><table class="grid"><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.1.0/CodeSystem-v3-ActReason.html">ActReason</a>#FP)</span></td></tr></table></div>',
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0314",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "308047",
            display: "Alprazolam 0.25mg Oral Tablet",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0311",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
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
            start: "2015-01-15",
            end: "2016-01-20",
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
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
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
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
    },
  },
};

export const mockMedicationRequestPrednisoneActive: MedicationRequest = {
  resourceType: "MedicationRequest",
  id: "medrx0305",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource &quot;medrx0305&quot; </p></div><p><b>identifier</b>: id: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: <a name="med0314"> </a></p><blockquote><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource &quot;med0314&quot; </p></div><p><b>code</b>: Alprazolam 0.25mg Oral Tablet <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.1.0/CodeSystem-v3-rxNorm.html">RxNorm</a>#308047)</span></p></blockquote><p><b>subject</b>: <a href="patient-pat1.html">Patient/pat1: Donald Duck</a> &quot;Duck DONALD&quot;</p><p><b>encounter</b>: <a href="encounter-f001.html">Encounter/f001: encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 2015-01-15</p><p><b>requester</b>: <a href="practitioner-f007.html">Practitioner/f007: Patrick Pump</a> &quot;Simone HEPS&quot;</p><blockquote><p><b>dispenseRequest</b></p><p><b>validityPeriod</b>: 2015-01-15 --&gt; 2016-01-15</p><p><b>numberOfRepeatsAllowed</b>: 1</p><p><b>quantity</b>: 30 TAB<span style="background: LightGoldenRodYellow"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = \'Tablet\')</span></p></blockquote><h3>Substitutions</h3><table class="grid"><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.1.0/CodeSystem-v3-ActReason.html">ActReason</a>#FP)</span></td></tr></table></div>',
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0314",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "308047",
            display: "Alprazolam 0.25mg Oral Tablet",
          },
        ],
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/prescriptions",
      value: "12345689",
    },
  ],
  status: "completed",
  intent: "order",
  medicationReference: {
    reference: "#med0311",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  encounter: {
    reference: "Encounter/f001",
    display: "encounter who leads to this prescription",
  },
  authoredOn: "2015-01-15",
  requester: {
    reference: "Practitioner/f007",
    display: "Patrick Pump",
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
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
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
  dispenseRequest: {
    validityPeriod: {
      start: "2015-01-15",
      end: "2016-01-15",
    },
    numberOfRepeatsAllowed: 1,
    quantity: {
      value: 30,
      unit: "TAB",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB",
    },
    expectedSupplyDuration: {
      value: 10,
      unit: "days",
      system: "http://unitsofmeasure.org",
      code: "d",
    },
  },
  substitution: {
    allowedBoolean: true,
    reason: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "FP",
          display: "formulary policy",
        },
      ],
    },
  },
};
