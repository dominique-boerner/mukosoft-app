import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabsPage } from './tabs.page';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TabsPage],
        imports: [TranslateModule.forRoot()],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render 3 items', () => {
    const tabBar = fixture.debugElement.query(By.css('[data-test-id=tab-bar]'));
    expect(tabBar.children.length).toEqual(component.tabItems.length);
  });
});
