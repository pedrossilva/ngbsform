import {FormArray, FormBuilder, ValidatorFn} from '@angular/forms';
import {ControlConfig} from './control.interface';

export class OptionsForm<T> {

  arrays: {[key: string]: OptionsForm<any>} = {};
  groups: {[key: string]: OptionsForm<any>} = {};
  requireds: Array<string> = [];
  order: Array<string> = [];
  validators: {[key: string]: ValidatorFn} = {};
  typeControl = {control: {}, group: {}, array: {}};

  fieldsConfig: Array<ControlConfig> = [];

  constructor(private typeModel: new () => T, assign?: OptionsForm<T>) {
    if (assign) {
      delete assign.constructor;
      delete assign.typeModel;
      Object.assign(this, assign);
    }
  }

  model = (): T => new this.typeModel;

  // model(): T { return new this.typeModel; }

  getForm(data?, model = this.model()) {
    const fb = new FormBuilder();
    // const model = this.model();
    this.typeControl = Object.keys(model).reduce((vat, k) => {
      const it = model[k];
      let type = 'control';
      if(Array.isArray(it)) type = 'array';
      else if(it && typeof it === 'object') type = 'group';
      vat[type][k] = model[k];
      return vat;
    }, {control: {}, group: {}, array: {}});
    console.log('>>> TYPECONTROL', this.typeControl)
    const form = fb.group(this.typeControl.control);
    // Object.keys(keys.group).forEach(k => {
    //   const newForm = this.getForm(model[k], model[k]);
    //   form.setControl(k, newForm);
    // });
    // Object.keys(keys.array).forEach(k => {
    //   form.setControl(k, new FormArray([]));
    // });
    if(data) form.patchValue(data);
    return form;
  }
}
