import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForCustomersPage } from './for-customers.page';

describe('ForCustomersPage', () => {
  let component: ForCustomersPage;
  let fixture: ComponentFixture<ForCustomersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForCustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
