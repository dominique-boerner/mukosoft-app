import { Component } from '@angular/core';
import { TabsService } from './services/tabs.service';

@Component({
  selector: 'mukosoft-app-nx-tabs',
  templateUrl: 'tabs-page.component.html',
})
export class TabsPageComponent {
  readonly slot = 'bottom';

  tabItems = this.tabsService.tabItems;

  constructor(private readonly tabsService: TabsService) {}
}
