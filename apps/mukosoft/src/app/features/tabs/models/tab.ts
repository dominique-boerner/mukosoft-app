import { Route } from "@angular/router";

export interface Tab extends Route {
  icon: string;
  label: string;
}
