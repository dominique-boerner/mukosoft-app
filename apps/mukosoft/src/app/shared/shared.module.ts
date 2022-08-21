import { NgModule } from '@angular/core';
import { InputComponent } from './atoms/input/input.component';
import { IonicModule } from '@ionic/angular';
import { TypographyModule } from './atoms/typography/typography.module';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { CommonModule } from '@angular/common';

const declarations = [InputComponent, UserAvatarComponent];
const imports = [IonicModule, TypographyModule];

@NgModule({
  imports: [
    imports,
    CommonModule
  ],
  declarations,
  exports: [...declarations, ...imports],
})
export class SharedModule {}
