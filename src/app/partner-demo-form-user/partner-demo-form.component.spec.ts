import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerDemoFormComponent } from './partner-demo-form.component';

describe('PartnerDemoFormComponent', () => {
  let component: PartnerDemoFormComponent;
  let fixture: ComponentFixture<PartnerDemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerDemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerDemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
