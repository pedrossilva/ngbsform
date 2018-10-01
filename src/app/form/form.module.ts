import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { FieldComponent } from './field/field.component';
import { GroupComponent } from './group/group.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [
    FormComponent,
    InputComponent,
    FieldComponent,
    GroupComponent],
  exports: [
    FormComponent,
    InputComponent,
    FieldComponent,
    GroupComponent
  ]
})
export class FormModule { }
