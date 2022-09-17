import { Coding } from "fhir/r4";

const system = "https://mukosoft.de";
const codePrefix = "MS";

export const medicationFormCodings: Coding[] = [
  {
    system,
    code: `${codePrefix}5000`,
    display: "pill",
  },
  {
    system,
    code: `${codePrefix}5001`,
    display: "inhaler",
  },
  {
    system,
    code: `${codePrefix}5999`,
    display: "other",
  },
];
