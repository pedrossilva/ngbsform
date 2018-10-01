import {ValidatorFn} from '@angular/forms';

export interface ControlValidator {
  name: string;
  validator: ValidatorFn;
  message: string;
}
export interface ControlConfig {
  label?: string;
  name: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  config?: Array<ControlConfig>;
  // config?: GroupConfig | ArrayConfig;
  validations?: Array<ControlValidator>;
}
export class GroupConfig {
  label?: string;
  type = 'group';
  value?: any;
  validators?: Array<ControlValidator>;
}
export class ArrayConfig {
  label?: string;
  type = 'array';
  value?: any;
  validators?: Array<ControlValidator>;
}
