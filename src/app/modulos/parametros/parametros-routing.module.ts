import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';

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
  },
  {
    path:"cliente-listar",
    component: ListarClienteComponent
  },
  {
    path:"cliente-agregar",
    component: CrearClienteComponent
  },
  {
    path:"cliente-eliminar/:id",
    component: EliminarClienteComponent
  },
  {
    path:"cliente-editar/:id",
    component: EditarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
