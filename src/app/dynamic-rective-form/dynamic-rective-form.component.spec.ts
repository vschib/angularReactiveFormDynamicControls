import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRectiveFormComponent } from './dynamic-rective-form.component';

describe('DynamicRectiveFormComponent', () => {
  let component: DynamicRectiveFormComponent;
  let fixture: ComponentFixture<DynamicRectiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicRectiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
