import { TestBed } from '@angular/core/testing';

import { ValidarSesionActivaGuard } from './validar-sesion-activa.guard';

describe('ValidarSesionActivaGuard', () => {
  let guard: ValidarSesionActivaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarSesionActivaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
