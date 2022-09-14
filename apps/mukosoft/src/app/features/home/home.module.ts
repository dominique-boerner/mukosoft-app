import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePageComponent } from "./home-page.component";
import { HomeRoutineModule } from "./home-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { GreetingCardComponent } from "./components/greeting-card/greeting-card.component";
import { SharedModule } from "../../shared/shared.module";
import { NewsSliderComponent } from "./components/news-slider/news-slider.component";

const imports = [
  IonicModule,
  CommonModule,
  FormsModule,
  HomeRoutineModule,
  TranslateModule,
];
const components = [
  HomePageComponent,
  GreetingCardComponent,
  NewsSliderComponent,
];

const declarations = [...components];

@NgModule({
  imports: [imports, SharedModule],
  declarations,
})
export class HomeModule {}
