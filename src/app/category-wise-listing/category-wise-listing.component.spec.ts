import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseListingComponent } from './category-wise-listing.component';

describe('CategoryWiseListingComponent', () => {
  let component: CategoryWiseListingComponent;
  let fixture: ComponentFixture<CategoryWiseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWiseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWiseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
