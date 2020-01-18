import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionDemoFormComponent } from './institution-demo-form.component';

describe('InstitutionDemoFormComponent', () => {
  let component: InstitutionDemoFormComponent;
  let fixture: ComponentFixture<InstitutionDemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionDemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionDemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
