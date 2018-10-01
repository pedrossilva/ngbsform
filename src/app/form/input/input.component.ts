import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'f-input',
  template: `
    <input *ngIf="control" type="text" class="form-control" [id]="id || name" [name]="name || id" [formControl]="control">
  `,
  styles: []
})
export class InputComponent implements OnInit {

  // @HostBinding('class.form-control') col = true;
  @Input() id = '';
  @Input() name = '';

  private _control: FormControl;
  get control(): FormControl { return this._control; }
  @Input() set control(control: FormControl) {
    this._control = control;
    console.log('Control >>>>>>', control);
  }

  constructor() { }

  ngOnInit() {
  }

}
