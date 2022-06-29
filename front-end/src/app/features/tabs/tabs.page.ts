import { Component } from '@angular/core';
import { TabsService } from './services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
})
export class TabsPage {
  readonly slot = 'bottom';

  tabItems = this.tabsService.tabItems;

  constructor(private readonly tabsService: TabsService) {}
}
