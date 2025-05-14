import { TestBed } from '@angular/core/testing';

import { VendecarroService } from './vendecarro.service';

describe('VendecarroService', () => {
  let service: VendecarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendecarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
