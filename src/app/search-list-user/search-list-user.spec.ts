import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListUserComponent } from './search-list-user';

describe('SimulationListComponent', () => {
  let component: SearchListUserComponent;
  let fixture: ComponentFixture<SearchListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
