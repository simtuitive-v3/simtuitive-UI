import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBusinessComponent } from './homepage-business.component';

describe('HomepageBusinessComponent', () => {
  let component: HomepageBusinessComponent;
  let fixture: ComponentFixture<HomepageBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
