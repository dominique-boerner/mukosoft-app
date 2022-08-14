import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { Tab1PageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { GreetingCardComponent } from './components/greeting-card/greeting-card.component';

const imports = [
  IonicModule,
  CommonModule,
  FormsModule,
  Tab1PageRoutingModule,
  TranslateModule,
];
const components = [HomePage, GreetingCardComponent];

const declarations = [...components];

@NgModule({
  imports,
  declarations,
})
export class Tab1PageModule {}
