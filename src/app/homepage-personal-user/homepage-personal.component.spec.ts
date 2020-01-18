import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePersonalComponent } from './homepage-personal.component';

describe('HomepagePersonalComponent', () => {
  let component: HomepagePersonalComponent;
  let fixture: ComponentFixture<HomepagePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
