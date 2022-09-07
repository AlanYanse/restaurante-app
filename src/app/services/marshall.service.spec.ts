import { TestBed } from '@angular/core/testing';

import { MarshallService } from './marshall.service';

describe('MarshallService', () => {
  let service: MarshallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarshallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
