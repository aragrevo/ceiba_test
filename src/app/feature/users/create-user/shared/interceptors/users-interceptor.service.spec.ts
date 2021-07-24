import { TestBed } from '@angular/core/testing';

import { UsersInterceptorService } from './users-interceptor.service';

describe('UserInterceptorService', () => {
  let service: UsersInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
