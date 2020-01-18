import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInCategoryPageComponent } from './logged-in-category-page.component';

describe('LoggedInCategoryPageComponent', () => {
  let component: LoggedInCategoryPageComponent;
  let fixture: ComponentFixture<LoggedInCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
