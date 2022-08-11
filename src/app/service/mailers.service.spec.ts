import { TestBed } from '@angular/core/testing';

import { MailersService } from './mailers.service';

describe('MailersService', () => {
  let service: MailersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
