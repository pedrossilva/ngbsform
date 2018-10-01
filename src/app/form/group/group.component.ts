import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OptionsForm} from '../OptionsForm';
import {ControlConfig, ControlValidator} from '../control.interface';

@Component({
  selector: 'f-group',
  templateUrl: './group.component.html',
  styles: []
})
export class GroupComponent<T> implements OnInit {

  @Output('form') form$ = new EventEmitter<FormGroup>();
  @HostBinding('class.row') row = true;

  f = {
    keys: []
  }
  private fb = new FormBuilder();

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

  private _fields: Array<ControlConfig>;
  get fields(): Array<ControlConfig> { return this._fields; }
  @Input() set fields(opt: Array<ControlConfig>) {
    this._fields = opt;
    this.form = this.createControl();
    console.log('>>> FIELDS', opt);
  }

  // private _options: OptionsForm<T>;
  // get options(): OptionsForm<T> { return this._options; }
  // @Input() set options(opt: OptionsForm<T>) {
  //   if (!opt.order.length) opt.order = Object.keys(opt.model())
  //   this._options = opt;
  //   if (!this.form) {
  //     const form = opt.getForm();
  //     const isControl = control => {
  //       const eh = control instanceof FormControl;
  //       console.log('eh >>>', eh)
  //       return eh;
  //     }
  //     // const controls = (<FormGroup>form).controls;
  //     const model = opt.model();
  //     const mk = Object.keys(model);
  //
  //     this.f.keys = mk.filter(k => isControl(form.controls[k]));
  //
  //     // this.f.keys = mk.reduce((vat, k) => {
  //     //   if(isControl(form.controls[k])) vat.push(k);
  //     //   return vat;
  //     // }, []);
  //     this.form = form;
  //   }
  //
  // }

  constructor() { }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: Array<any>) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  ngOnInit() {

    console.log('>>>> FORM', this.form);
  }

}
