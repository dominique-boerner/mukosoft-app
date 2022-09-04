import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  TranslateLoader,
  TranslateModule,
  TranslateStore,
} from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { medicationRequestReducer } from "./core/reducer/medication-request-reducer/medication-request.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AppInitializerProvider } from "./core/provider/app-initializer.provider";
import { AppInitializerService } from "./features/medication/services/app-initializer-service/app-initializer.service";
import { patientReducer } from "./core/reducer/patient.reducer";

export const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, "./assets/i18n/", ".json");

export const appState = {
  medicationRequests: medicationRequestReducer,
  patient: patientReducer,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      defaultLanguage: "de",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appState),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppInitializerService,
    AppInitializerProvider,
    TranslateStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
