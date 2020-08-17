import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { FormGroup, FormArray } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Employee, Emp } from '../models/emp.model';

@Component({
  selector: 'app-data-table-dynamic-form',
  templateUrl: './data-table-dynamic-form.component.html',
  styleUrls: ['./data-table-dynamic-form.component.css']
})
export class DataTableDynamicFormComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dynamicForm: FormGroup;
  displaycols: string[]=['action','id','name','city','zip'];

  constructor(private formBuilder: RxFormBuilder, private changeDetectRef: ChangeDetectorRef) { }

  ngOnInit() {
    let emp=new Employee();
    this.dynamicForm=this.formBuilder.formGroup(emp);
    this.addNew();
    this.dataSource = new MatTableDataSource(this.propDFG.controls);
    this.dataSource.paginator = this.paginator;
  }

  get propDFG() { return <FormArray>this.dynamicForm.controls.emps;}

addNew(){
  this.propDFG.insert(0,this.formBuilder.formGroup(Emp));
  this.refreshDataTable()
}

deleteRow(i:number){
  this.propDFG.removeAt(i);
  this.refreshDataTable()
}

refreshDataTable(){
  this.dataSource.data = this.propDFG.controls;
  this.changeDetectRef.detectChanges();
}

onSubmit(){
  alert('Form Json: \n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
}

}
