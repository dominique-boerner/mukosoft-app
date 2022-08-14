import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicationPageComponent } from './medication-page.component';

import { Tab2PageRoutingModule } from './medication-routing.module';
import { MedicationRequestComponent } from './components/medication-request/medication-request.component';
import { MedicationComponent } from './components/medication/medication.component';
import { MedicationRequestItemComponent } from './components/medication-request-item/medication-request-item.component';
import { MedicationFabComponent } from './components/medication-fab/medication-fab.component';

const imports = [IonicModule, CommonModule, FormsModule, Tab2PageRoutingModule];

const components = [
  MedicationPageComponent,
  MedicationRequestComponent,
  MedicationComponent,
  MedicationRequestItemComponent,
  MedicationFabComponent,
];

const declarations = [components];

@NgModule({
  imports,
  declarations,
})
export class Tab2PageModule {}
