import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { IonicModule } from '@ionic/angular';
import { LabelComponent } from './label/label.component';

const declarations = [InputComponent, LabelComponent];

@NgModule({
  imports: [IonicModule],
  declarations,
  exports: [...declarations],
})
export class SharedModule {}
