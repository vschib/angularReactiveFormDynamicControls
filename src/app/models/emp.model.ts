import {required, propArray} from '@rxweb/reactive-form-validators';
export class Emp {
    @required()
    id:number;

    @required()
    name:string;

    @required()
    city:string;

    @required()
    zip:string;
}

export class Employee{
    @required()
    deptName:string;

    @propArray(Emp)
    emps:Array<Emp>=[];

}