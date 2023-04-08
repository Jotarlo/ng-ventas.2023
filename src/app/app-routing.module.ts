import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path:"seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(m => m.SeguridadModule)
  },
  {
    path:"parametros",
    loadChildren: () => import("./modulos/parametros/parametros.module").then(m => m.ParametrosModule)
  },
  {
    path:"ventas",
    loadChildren: () => import("./modulos/ventas/ventas.module").then(m => m.VentasModule)
  },
  {
    path:"reportes",
    loadChildren: () => import("./modulos/reportes/reportes.module").then(m => m.ReportesModule)
  },
  {
    path: "**",
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
