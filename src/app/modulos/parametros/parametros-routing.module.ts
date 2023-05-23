import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';

const routes: Routes = [
  {
    path:"producto-listar",
    component: ListarProductoComponent
  },
  {
    path:"producto-agregar",
    component: CrearProductoComponent
  },
  {
    path:"producto-eliminar/:id",
    component: EliminarProductoComponent
  },
  {
    path:"producto-editar/:id",
    component: EditarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
