import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesListDetailsComponent } from './employes-list-details.component';

describe('EmployesListDetailsComponent', () => {
  let component: EmployesListDetailsComponent;
  let fixture: ComponentFixture<EmployesListDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployesListDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployesListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
