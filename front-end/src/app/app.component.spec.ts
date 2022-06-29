import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [TranslateModule.forRoot()],
      }).compileComponents();

      translateService = TestBed.inject(TranslateService);
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it(`should set default language of the application to "${environment.defaultLanguage}"`, () => {
    component.ngOnInit();
    expect(translateService.defaultLang).toEqual(environment.defaultLanguage);
  });
});
