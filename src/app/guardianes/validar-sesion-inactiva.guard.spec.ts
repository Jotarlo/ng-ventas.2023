import { TestBed } from '@angular/core/testing';

import { ValidarSesionInactivaGuard } from './validar-sesion-inactiva.guard';

describe('ValidarSesionInactivaGuard', () => {
  let guard: ValidarSesionInactivaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarSesionInactivaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
