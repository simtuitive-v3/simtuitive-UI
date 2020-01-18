import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageProductModalComponent } from './home-page-product-modal.component';

describe('HomePageProductModalComponent', () => {
  let component: HomePageProductModalComponent;
  let fixture: ComponentFixture<HomePageProductModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageProductModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
