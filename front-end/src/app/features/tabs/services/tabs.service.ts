import { Injectable } from '@angular/core';
import { Tab } from '../models/tab';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  readonly tabItems: ReadonlyArray<Tab> = [
    {
      id: 'home',
      label: 'navigation.tabs.home',
      icon: 'fi fi-rr-home',
    },
    {
      id: 'medications',
      label: 'navigation.tabs.medications',
      icon: 'fi fi-rr-medicine',
    },
    {
      id: 'cookbook',
      label: 'navigation.tabs.cookbook',
      icon: 'fi fi-rr-carrot',
    },
    {
      id: 'settings',
      label: 'navigation.tabs.settings',
      icon: 'fi fi-rr-settings-sliders',
    },
  ];
}
