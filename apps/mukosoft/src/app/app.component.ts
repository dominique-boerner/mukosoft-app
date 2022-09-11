import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "../environments/environment";
import { selectErrorState } from "./core/selectors/error.selector";
import { Store } from "@ngrx/store";
import { AppState } from "./core/state/app-state";
import { ToastService } from "./core/services/toast-service/toast.service";
import { setError } from "./core/actions/error.action";
import { initialErrorState } from "./core/reducer/error-reducer/error.reducer";

@Component({
  selector: "mukosoft-app-nx-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  constructor(
    private readonly translateService: TranslateService,
    private readonly store: Store<AppState>,
    private readonly toastService: ToastService
  ) {}

  ngOnInit() {
    this.setDefaultLanguage();

    this.store.select(selectErrorState).subscribe((error) => {
      if (error.hasError) {
        this.toastService
          .showErrorToast(this.translateService.instant(error.title))
          .then(() =>
            this.store.dispatch(setError({ error: initialErrorState }))
          );
      }
    });
  }

  private setDefaultLanguage() {
    this.translateService.setDefaultLang(environment.defaultLanguage);
    this.translateService.use(environment.defaultLanguage);
  }
}
