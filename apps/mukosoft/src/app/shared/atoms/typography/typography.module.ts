import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LabelComponent } from './label/label.component';
import { TitleComponent } from './title/title.component';

const declarations = [LabelComponent, TitleComponent];

@NgModule({
  imports: [IonicModule],
  declarations,
  exports: [...declarations],
})
export class TypographyModule {}
