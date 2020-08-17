import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDynamicFormComponent } from './data-table-dynamic-form.component';

describe('DataTableDynamicFormComponent', () => {
  let component: DataTableDynamicFormComponent;
  let fixture: ComponentFixture<DataTableDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
