import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicRectiveFormComponent } from './dynamic-rective-form/dynamic-rective-form.component';
import { DataTableDynamicFormComponent } from './data-table-dynamic-form/data-table-dynamic-form.component';

const routes: Routes = [
{path: '', component: DynamicRectiveFormComponent},
{path:'dt', component:DataTableDynamicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
