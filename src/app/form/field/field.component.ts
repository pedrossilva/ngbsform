import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'f-field',
  template: `
    <div class="col">
      <div class="form-group">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class FieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
