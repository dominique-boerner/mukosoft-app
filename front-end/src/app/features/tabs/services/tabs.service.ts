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
      icon: 'home-outline',
    },
    {
      id: 'medications',
      label: 'navigation.tabs.medications',
      icon: 'ellipse',
    },
    {
      id: 'cookbook',
      label: 'navigation.tabs.cookbook',
      icon: 'book-outline',
    },
    {
      id: 'settings',
      label: 'navigation.tabs.settings',
      icon: 'settings-outline',
    },
  ];
}
