import { Injectable } from "@angular/core";
import { HumanName, Patient } from "fhir/r4";
import { getRandomAvatar } from "../../util/avatar-helper/avatar-helper";
import { UuidService } from "../uuid-service/uuid.service";
import { select, Store } from "@ngrx/store";
import {
  selectPatientAvatar,
  selectPatientName,
  selectPatientState,
} from "../../selectors/patient.selector";
import { AppState } from "../../state/app-state";
import { Observable } from "rxjs";
import { PatientDatabaseService } from "../patient-database-service/patient-database.service";
import { setPatient } from "../../actions/patient.action";

@Injectable({
  providedIn: "root",
})
export class PatientService {
  AVATAR_IDENTIFIER = "avatar";

  constructor(
    private readonly uuidService: UuidService,
    private readonly store: Store<AppState>,
    private readonly patientDatabaseService: PatientDatabaseService
  ) {
    this.getInitialPatient();
  }

  setPatientStore() {
    this.patientDatabaseService.getPatient().then((response) => {
      const noPatientDataExists = response.total_rows === 0;
      if (noPatientDataExists) {
        const newPatient = this.getInitialPatient();
        this.patientDatabaseService.putPatient(newPatient).catch((err) => err);
        this.store.dispatch(setPatient({ patient: newPatient }));
      } else {
        const patient = response.rows[0].doc;
        this.store.dispatch(setPatient({ patient }));
      }
    });
  }

  setPatient(patient: Patient) {
    this.store.dispatch(setPatient({ patient }));
  }

  getPatientAvatar(): Observable<string> {
    return this.store.select(selectPatientAvatar);
  }

  async setPatientName(name: HumanName) {
    this.store.select(selectPatientState).subscribe((patient) => {
      const remainingNames = patient.name.filter(
        (patientName) => patientName.use !== name.use
      );
      const newPatient = {
        ...patient,
        name: [...remainingNames, name],
      };
      this.patientDatabaseService.updatePatient(newPatient).then(() => {
        this.patientDatabaseService.getPatient().then((response) => {
          // const patient = response.rows[0].doc;
          // this.store.dispatch(setPatient({ patient }));
        });
      });
    });
  }

  getPatientName(): Observable<string> {
    return this.store.select(selectPatientName);
  }

  getInitialPatient(): Patient {
    return {
      resourceType: "Patient",
      id: this.uuidService.generateUuid(),
      birthDate: undefined,
      name: [
        {
          use: "nickname",
          text: "Nutzer",
        },
      ],
      photo: [{ title: this.AVATAR_IDENTIFIER, url: getRandomAvatar() }],
    };
  }

  getPatient() {
    return this.store.pipe(select(selectPatientState));
  }
}
