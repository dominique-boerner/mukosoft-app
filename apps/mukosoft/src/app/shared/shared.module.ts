import { NgModule } from '@angular/core';
import { InputComponent } from './atoms/input/input.component';
import { IonicModule } from '@ionic/angular';
import { TypographyModule } from './atoms/typography/typography.module';

const declarations = [InputComponent];
const imports = [IonicModule, TypographyModule]

@NgModule({
  imports,
  declarations,
  exports: [...declarations, ...imports],
})
export class SharedModule {}
