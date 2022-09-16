import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateMedicationComponent } from "./create-medication.component";

const routes: Routes = [
  {
    path: "",
    component: CreateMedicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMedicationRoutingModule {}
