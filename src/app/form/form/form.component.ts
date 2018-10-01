import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
//
import {OptionsForm} from '../OptionsForm';
import {ControlConfig} from '../control.interface';

@Component({
  selector: 'f-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent<T> implements OnInit {

  @Output('form') form$ = new EventEmitter<FormGroup>();

  // f = {
  //   keys: []
  // }

  private _form: FormGroup;
  get form(): FormGroup { return this._form; }
  set form(form: FormGroup) {
    this._form = form;
    this.form$.emit(this._form);
  }

  private _options: Array<ControlConfig>;
  get options(): Array<ControlConfig> { return this._options; }
  @Input() set options(opt: Array<ControlConfig>) {
    this._options = opt;
  }

  // private _options: OptionsForm<T>;
  // get options(): OptionsForm<T> { return this._options; }
  // @Input() set options(opt: OptionsForm<T>) {
  //   this._options = opt;
  //   // if (!this.form) {
  //   //   const form = opt.getForm();
  //   //   const isControl = control => {
  //   //     const eh = control instanceof FormControl;
  //   //     console.log('eh >>>', eh)
  //   //     return eh;
  //   //   }
  //   //   // const controls = (<FormGroup>form).controls;
  //   //   const model = opt.model();
  //   //   const mk = Object.keys(model);
  //   //
  //   //   this.f.keys = mk.filter(k => isControl(form.controls[k]));
  //   //
  //   //   // this.f.keys = mk.reduce((vat, k) => {
  //   //   //   if(isControl(form.controls[k])) vat.push(k);
  //   //   //   return vat;
  //   //   // }, []);
  //   //   this.form = form;
  //   // }
  //
  // }

  // model = (): T => new this.typeModel;

  constructor() { }

  ngOnInit() {
    // console.log('>>>> FORM', this.form);
  }

}
