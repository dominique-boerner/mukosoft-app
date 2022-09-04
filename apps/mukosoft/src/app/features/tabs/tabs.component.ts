import { Component } from "@angular/core";
import { tabItems } from "./tab-items";

@Component({
  selector: "mukosoft-tabs",
  templateUrl: "tabs.component.html",
})
export class TabsComponent {
  readonly slot = "bottom";

  public tabItems = tabItems;
}
