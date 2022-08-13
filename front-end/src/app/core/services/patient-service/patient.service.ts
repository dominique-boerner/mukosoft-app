import { Injectable } from '@angular/core';
import { Patient } from 'fhir/r4';
import { getRandomAvatar } from '../../util/avatar-helper';
import { UuidService } from '../uuid-service/uuid.service';
import { Store } from '@ngrx/store';
import {
  selectPatientAvatar,
  selectPatientName,
} from '../../selectors/patient.selector';
import { AppState } from '../../state/app-state';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  AVATAR_IDENTIFIER = 'avatar';

  constructor(
    private readonly uuidService: UuidService,
    private readonly store: Store<AppState>
  ) {
    this.getInitialPatient();
  }

  getPatientAvatar(): Observable<string> {
    return this.store.select(selectPatientAvatar);
  }

  getPatientName(): Observable<string> {
    return this.store.select(selectPatientName);
  }

  getInitialPatient(): Patient {
    return {
      resourceType: 'Patient',
      id: this.uuidService.generateUuid(),
      birthDate: undefined,
      name: [
        {
          use: 'nickname',
          text: 'Nutzer',
        },
      ],
      photo: [{ title: this.AVATAR_IDENTIFIER, url: getRandomAvatar() }],
    };
  }
}
