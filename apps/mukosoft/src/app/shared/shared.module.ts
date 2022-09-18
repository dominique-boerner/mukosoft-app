import { NgModule } from "@angular/core";
import { InputComponent } from "./atoms/input/input.component";
import { IonicModule } from "@ionic/angular";
import { TypographyModule } from "./atoms/typography/typography.module";
import { UserAvatarComponent } from "./user-avatar/user-avatar.component";
import { CommonModule } from "@angular/common";
import { MedicationRequestItemComponent } from "./molecules/medication-request-item/medication-request-item.component";
import { MedicationRequestComponent } from "./molecules/medication-request/medication-request.component";
import { MedicationNameComponent } from "./atoms/medication-name/medication-name.component";
import { MedicationDosageInstructionComponent } from "./molecules/medication-dosage-instruction/medication-dosage-instruction.component";
import { MedicationIconComponent } from "./atoms/medication-icon/medication-icon.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TimePickerComponent } from "./molecules/time-picker/time-picker.component";
import { TranslateModule } from "@ngx-translate/core";

const declarations = [
  InputComponent,
  UserAvatarComponent,
  MedicationNameComponent,
  MedicationRequestItemComponent,
  MedicationRequestComponent,
  MedicationDosageInstructionComponent,
  MedicationIconComponent,
  TimePickerComponent,
];
const imports = [IonicModule, TypographyModule];

@NgModule({
  imports: [imports, CommonModule, ReactiveFormsModule, TranslateModule],
  declarations,
  exports: [...declarations, ...imports],
})
export class SharedModule {}
