import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { IdentificacionTwofaComponent } from './identificacion-twofa/identificacion-twofa.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';


@NgModule({
  declarations: [
    IdentificacionUsuarioComponent,
    IdentificacionTwofaComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
    EliminarUsuarioComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
