import { TestBed } from '@angular/core/testing';

import { DoorbellService } from './doorbell.service';

describe('DoorbellService', () => {
  let service: DoorbellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoorbellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
