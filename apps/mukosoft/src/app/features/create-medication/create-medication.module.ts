import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { CreateMedicationRoutingModule } from "./create-medication-routing.module";

const imports = [
  IonicModule,
  CommonModule,
  FormsModule,
  SharedModule,
  CreateMedicationRoutingModule,
];

const components: any[] = [];

const declarations = [components];

@NgModule({
  imports,
  declarations,
})
export class CreateMedicationModule {}
