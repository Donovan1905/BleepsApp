import { TestBed } from '@angular/core/testing';

import { LocalNService } from './local-n.service';

describe('LocalNService', () => {
  let service: LocalNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
