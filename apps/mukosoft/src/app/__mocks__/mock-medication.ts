import { Medication } from "fhir/r4";

export const prednisone: Medication = {
  resourceType: "Medication",
  id: "med0311",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource &quot;med0311&quot; </p></div><p><b>code</b>: Prednisone 5mg tablet (Product) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#373994007)</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#385055001)</span></p><h3>Ingredients</h3><table class="grid"><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td><a name="sub03"> </a><blockquote><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource &quot;sub03&quot; </p></div><p><b>code</b>: Prednisone (substance) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#116602009)</span></p></blockquote></td><td>5 mg<span style="background: LightGoldenRodYellow"> (Details: UCUM code mg = \'mg\')</span>/1(unit TAB from http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm)<span style="background: LightGoldenRodYellow"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = \'Tablet\')</span></td></tr></table></div>',
  },
  contained: [
    {
      resourceType: "Substance",
      id: "sub03",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "116602009",
            display: "Prednisone (substance)",
          },
        ],
      },
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "373994007",
        display: "Prednisolon 5mg",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemReference: {
        reference: "#sub03",
      },
      strength: {
        numerator: {
          value: 5,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "TAB",
        },
      },
    },
  ],
};
