import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OficalPage } from './ofical.page';

describe('OficalPage', () => {
  let component: OficalPage;
  let fixture: ComponentFixture<OficalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OficalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
