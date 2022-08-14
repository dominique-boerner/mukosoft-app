import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page.component';
import { HomeRoutineModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { GreetingCardComponent } from './components/greeting-card/greeting-card.component';

const imports = [
  IonicModule,
  CommonModule,
  FormsModule,
  HomeRoutineModule,
  TranslateModule,
];
const components = [HomePageComponent, GreetingCardComponent];

const declarations = [...components];

@NgModule({
  imports,
  declarations,
})
export class HomeModule {}
