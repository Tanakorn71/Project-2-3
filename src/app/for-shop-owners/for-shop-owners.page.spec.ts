import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForShopOwnersPage } from './for-shop-owners.page';

describe('ForShopOwnersPage', () => {
  let component: ForShopOwnersPage;
  let fixture: ComponentFixture<ForShopOwnersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForShopOwnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
