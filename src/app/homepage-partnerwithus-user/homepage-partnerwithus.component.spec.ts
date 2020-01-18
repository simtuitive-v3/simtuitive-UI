import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePartnerwithusComponent } from './homepage-partnerwithus.component';

describe('HomepagePartnerwithusComponent', () => {
  let component: HomepagePartnerwithusComponent;
  let fixture: ComponentFixture<HomepagePartnerwithusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagePartnerwithusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagePartnerwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
