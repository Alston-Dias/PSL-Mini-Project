import { TestBed } from '@angular/core/testing';

import { UniquebookidService } from './uniquebookid.service';

describe('UniquebookidService', () => {
  let service: UniquebookidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniquebookidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
