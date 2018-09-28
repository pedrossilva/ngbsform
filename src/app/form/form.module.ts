import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormComponent,
    InputComponent,
    FieldComponent],
  exports: [
    FormComponent,
    InputComponent,
    FieldComponent
  ]
})
export class FormModule { }
