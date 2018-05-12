import { TestBed, inject } from '@angular/core/testing';

import { LupoService } from './lupo.service';

describe('LupoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LupoService]
    });
  });

  it('should be created', inject([LupoService], (service: LupoService) => {
    expect(service).toBeTruthy();
  }));
});
