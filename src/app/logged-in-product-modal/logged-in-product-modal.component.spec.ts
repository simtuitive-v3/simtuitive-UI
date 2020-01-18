import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInProductModalComponent } from './logged-in-product-modal.component';

describe('LoggedInProductModalComponent', () => {
  let component: LoggedInProductModalComponent;
  let fixture: ComponentFixture<LoggedInProductModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInProductModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
