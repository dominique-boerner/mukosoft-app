import { Component, EventEmitter, Output } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { MukoSoftIcons } from "../../../../../theme/icons";

@Component({
  selector: "mukosoft-medication-fab",
  templateUrl: "./medication-fab.component.html",
})
export class MedicationFabComponent {
  readonly Icons = MukoSoftIcons;

  @Output()
  onMedicationAddClick = new EventEmitter<void>();

  @Output()
  onMedicationsRemoveClick = new EventEmitter<void>();

  isDevelopmentMode = !environment.production;
}
