import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPricePage } from './product-price.page';

describe('ProductPricePage', () => {
  let component: ProductPricePage;
  let fixture: ComponentFixture<ProductPricePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
