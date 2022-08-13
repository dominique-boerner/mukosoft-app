import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateStore,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { medicationRequestReducer } from './core/reducer/medication-request.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PatientService } from './core/services/patient-service/patient.service';
import { Patient } from 'fhir/r4';
import { setPatient } from './core/actions/patient.action';
import { PatientDatabaseService } from './core/services/patient-database-service/patient-database.service';
import { patientReducer } from './core/reducer/patient.reducer';

export const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

const appState = {
  medicationRequests: medicationRequestReducer,
  patient: patientReducer,
};

@Injectable()
export class AppInitializer {
  constructor(
    private readonly patientService: PatientService,
    private readonly store: Store<Patient>,
    private readonly patientDatabaseService: PatientDatabaseService
  ) {}

  resolve() {
    this.patientDatabaseService.getPatient().then((response) => {
      const noPatientDataExists = response.total_rows === 0;
      if (noPatientDataExists) {
        const newPatient = this.patientService.getInitialPatient();
        this.patientDatabaseService.putPatient(newPatient).catch((err) => err);
        this.store.dispatch(setPatient({ patient: newPatient }));
      } else {
        const patient = response.rows[0].doc;
        this.store.dispatch(setPatient({ patient }));
      }
    });
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      defaultLanguage: 'de',
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
    AppInitializer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: (service: AppInitializer) => {
        return () => service.resolve();
      },
      deps: [AppInitializer],
      multi: true,
    },
    TranslateStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
