import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'f-input',
  template: `
    <input type="text" [name]="name" [formControl]="control">
  `,
  styles: []
})
export class InputComponent implements OnInit {

  @Input() name = '';

  private _cotrol: FormControl;
  get control(): FormControl { return this._cotrol; }
  @Input() set control(control: FormControl) {
    this._cotrol = control;
  }

  constructor() { }

  ngOnInit() {
  }

}
