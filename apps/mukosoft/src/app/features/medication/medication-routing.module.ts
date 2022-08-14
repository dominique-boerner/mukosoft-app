import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationPageComponent } from './medication-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
