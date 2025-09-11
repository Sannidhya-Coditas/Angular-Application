import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feat1Component } from './feat1.component';

describe('Feat1Component', () => {
  let component: Feat1Component;
  let fixture: ComponentFixture<Feat1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Feat1Component],
    });
    fixture = TestBed.createComponent(Feat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
