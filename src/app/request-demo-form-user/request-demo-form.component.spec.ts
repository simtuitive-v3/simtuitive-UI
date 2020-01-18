import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDemoFormComponent } from './request-demo-form.component';

describe('RequestDemoFormComponent', () => {
  let component: RequestDemoFormComponent;
  let fixture: ComponentFixture<RequestDemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
