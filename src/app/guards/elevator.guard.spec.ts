import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { elevatorGuard } from './elevator.guard';

describe('elevatorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => elevatorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
