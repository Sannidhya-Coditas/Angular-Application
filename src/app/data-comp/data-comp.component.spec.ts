import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCompComponent } from './data-comp.component';

describe('DataCompComponent', () => {
  let component: DataCompComponent;
  let fixture: ComponentFixture<DataCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCompComponent],
    });
    fixture = TestBed.createComponent(DataCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
