import { TestBed } from '@angular/core/testing';

import { NgbsFormService } from './ngbs-form.service';

describe('NgbsFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgbsFormService = TestBed.get(NgbsFormService);
    expect(service).toBeTruthy();
  });
});
