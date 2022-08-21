import { Component } from '@angular/core';
import { TabsService } from './services/tabs.service';

@Component({
  selector: 'mukosoft-tabs',
  templateUrl: 'tabs.component.html',
})
export class TabsComponent {
  readonly slot = 'bottom';

  tabItems = this.tabsService.tabItems;

  constructor(private readonly tabsService: TabsService) {}
}
