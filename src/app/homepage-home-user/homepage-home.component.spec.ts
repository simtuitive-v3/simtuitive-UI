import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHomeComponent } from './homepage-home.component';

describe('HomepageHomeComponent', () => {
  let component: HomepageHomeComponent;
  let fixture: ComponentFixture<HomepageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
