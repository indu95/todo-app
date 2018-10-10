import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayManipulationComponent } from './array-manipulation.component';

describe('ArrayManipulationComponent', () => {
  let component: ArrayManipulationComponent;
  let fixture: ComponentFixture<ArrayManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
