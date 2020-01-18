import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPwdPageComponent } from './verify-pwd-page.component';

describe('VerifyPwdPageComponent', () => {
  let component: VerifyPwdPageComponent;
  let fixture: ComponentFixture<VerifyPwdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPwdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPwdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
