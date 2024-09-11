import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateANewAccountPage } from './create-a-new-account.page';

describe('CreateANewAccountPage', () => {
  let component: CreateANewAccountPage;
  let fixture: ComponentFixture<CreateANewAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateANewAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
