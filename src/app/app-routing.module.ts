import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicRectiveFormComponent } from './dynamic-rective-form/dynamic-rective-form.component';

const routes: Routes = [
{path: '', component: DynamicRectiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
