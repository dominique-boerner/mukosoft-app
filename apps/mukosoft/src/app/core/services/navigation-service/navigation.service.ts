import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from '../../util/logger';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private readonly router: Router) {}

  navigateToSettingsPage() {
    this.router
      .navigate(['settings'])
      .then(() =>
        Logger.info('Navigating to SettingsPage', NavigationService.name)
      )
      .catch((err) => Logger.error(err, NavigationService.name));
  }
}
