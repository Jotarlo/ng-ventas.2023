import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios.component';

describe('RegistroPublicoUsuariosComponent', () => {
  let component: RegistroPublicoUsuariosComponent;
  let fixture: ComponentFixture<RegistroPublicoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPublicoUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPublicoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
