import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionUsuarioComponent } from './identificacion-usuario.component';

describe('IdentificacionUsuarioComponent', () => {
  let component: IdentificacionUsuarioComponent;
  let fixture: ComponentFixture<IdentificacionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
