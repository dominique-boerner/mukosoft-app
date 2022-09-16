import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MedicationPageComponent } from "./medication-page.component";

import { Tab2PageRoutingModule } from "./medication-routing.module";
import { MedicationFabComponent } from "./components/medication-fab/medication-fab.component";
import { SharedModule } from "../../shared/shared.module";

const imports = [
  IonicModule,
  CommonModule,
  FormsModule,
  Tab2PageRoutingModule,
  SharedModule,
];

const components = [MedicationPageComponent, MedicationFabComponent];

const declarations = [components];

@NgModule({
  imports,
  declarations,
})
export class Tab2PageModule {}
