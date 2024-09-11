import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AkkaraphonPage } from './akkaraphon.page';

describe('AkkaraphonPage', () => {
  let component: AkkaraphonPage;
  let fixture: ComponentFixture<AkkaraphonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AkkaraphonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
