import { Injectable } from "@nestjs/common";
import { parse as xmlParse, simplify as xmlSimplify } from "txml";
import * as fs from "fs";

@Injectable()
export class MedicationService {
  medicationXmlPath = "./resources/medication/oddb_product.xml";
  medicationXmlTestPath = "./resources/medication/oddb_product_test.xml";

  medications = [];

  constructor() {
    this.readMedicationFromFile();
  }

  readMedicationFromFile() {
    const file = fs.readFileSync(this.medicationXmlPath, { encoding: "utf8" });
    this.medications = xmlSimplify(xmlParse(file)).PRODUCT.PRD;
  }

  getMedication(name, count = 10, page = 0) {
    const medications = this.medications.filter((medication) => {
      return medication.DSCRD.toLowerCase().includes(name.toLowerCase());
    });

    const medicationsCount = medications.length;

    return {
      meta: {
        totalNumber: medicationsCount,
        totalPages: Math.floor(medicationsCount / count),
        page: page,
        countPerPage: count,
        count: medications.slice(page * count, page * count + count).length,
      },
      data: medications.slice(page * count, page * count + count + 1),
    };
  }
}
