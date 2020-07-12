import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-dynamic-rective-form',
  templateUrl: './dynamic-rective-form.component.html',
  styleUrls: ['./dynamic-rective-form.component.css']
})
export class DynamicRectiveFormComponent implements OnInit {
  // tslint:disable-next-line: typedef-whitespace
  dynamicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      deptName: ['Human Resource ', RequiredValidator],
      dynamicFormGroup: new FormArray([])
    });
    // debugger;
this.getDefaultFormValues();

  }

  onSubmit(){
alert(JSON.stringify(this.dynamicForm.value));
  }

get propDFG(){
return this.dynamicForm.controls.dynamicFormGroup as FormArray;
}

getDefaultFormValues(){
let row_1 = new dynamicControlTypes();
row_1 = this.getdynamicControlTypesObj(101,"Sundar Pichai","Silicon Valley",637353);
this.addNewDFGControl(row_1);
}

deleteRow(index){
if(this.propDFG.length>1){
  this.propDFG.removeAt(index);
} else {
  alert("Validation: Atleast one record should be present!")
}
}

addNewRow(){
  let obj = new dynamicControlTypes();
  this.addNewDFGControl(obj);
}

addNewDFGControl(obj:dynamicControlTypes){
this.propDFG.push(this.formBuilder.group({
'id':[obj.id, Validators.required],
'name':[obj.name, Validators.required],
'city':[obj.city, Validators.required],
'zip':[obj.zip, Validators.required],
}));
}

  getdynamicControlTypesObj(id: number, name: string, city: string, zip: number) {
    let obj = new dynamicControlTypes();
    obj.id = id;
    obj.name = name;
    obj.city =city;
    obj.zip = zip;
return obj;
  }
}

class dynamicControlTypes {
  id: number;
  name: string;
  city: string;
  zip: number;
}
