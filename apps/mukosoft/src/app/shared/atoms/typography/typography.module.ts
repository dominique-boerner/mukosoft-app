import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { LabelComponent } from "./label/label.component";
import { TitleComponent } from "./title/title.component";
import { HeadingComponent } from "./heading/heading.component";
import { TextComponent } from "./text/text.component";

const declarations = [
  LabelComponent,
  TitleComponent,
  HeadingComponent,
  TextComponent,
];

@NgModule({
  imports: [IonicModule],
  declarations,
  exports: [...declarations],
})
export class TypographyModule {}
