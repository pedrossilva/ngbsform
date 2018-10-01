import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'f-field',
  template: `
    <div class="form-group">
      <label [for]="id || name" for="">{{label || name || id}}</label>
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class FieldComponent implements OnInit {

  @HostBinding('class.col') col = true;
  @HostBinding('class.col-md-4') col4 = true;

  @Input() id: string;
  @Input() name: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
