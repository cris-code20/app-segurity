import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegitroPage } from './regitro.page';

describe('RegitroPage', () => {
  let component: RegitroPage;
  let fixture: ComponentFixture<RegitroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegitroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
