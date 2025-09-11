import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultSelectCheckboxComponent } from './mult-select-checkbox.component';

describe('MultSelectCheckboxComponent', () => {
  let component: MultSelectCheckboxComponent;
  let fixture: ComponentFixture<MultSelectCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultSelectCheckboxComponent],
    });
    fixture = TestBed.createComponent(MultSelectCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
