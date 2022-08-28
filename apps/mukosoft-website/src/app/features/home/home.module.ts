import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home.component';

const imports = [CommonModule, HomeRoutingModule, TranslateModule];
const components = [HomeComponent];

const declarations = [...components];

@NgModule({
  imports: [
    imports,
  ],
  declarations,
})
export class HomeModule {}
