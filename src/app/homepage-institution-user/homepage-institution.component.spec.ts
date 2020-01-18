import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageInstitutionComponent } from './homepage-institution.component';

describe('HomepageInstitutionComponent', () => {
  let component: HomepageInstitutionComponent;
  let fixture: ComponentFixture<HomepageInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
