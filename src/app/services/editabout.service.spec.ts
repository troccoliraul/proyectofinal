import { TestBed } from '@angular/core/testing';

import { EditaboutService } from './editabout.service';

describe('EditaboutService', () => {
  let service: EditaboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditaboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
