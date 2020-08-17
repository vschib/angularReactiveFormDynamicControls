import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule, MatSortModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { DynamicRectiveFormComponent } from './dynamic-rective-form/dynamic-rective-form.component';
import { DataTableDynamicFormComponent } from './data-table-dynamic-form/data-table-dynamic-form.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DynamicRectiveFormComponent,
    DataTableDynamicFormComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule, MatSortModule, MatTableModule, MatTooltipModule,
    RxReactiveFormsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
