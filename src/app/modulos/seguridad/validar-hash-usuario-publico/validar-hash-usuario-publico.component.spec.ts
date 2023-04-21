import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico.component';

describe('ValidarHashUsuarioPublicoComponent', () => {
  let component: ValidarHashUsuarioPublicoComponent;
  let fixture: ComponentFixture<ValidarHashUsuarioPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarHashUsuarioPublicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarHashUsuarioPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
