import { Component } from '@angular/core';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ProductoModel } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/servicios/parametros/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  listaRegistros:ProductoModel[]=[];
  pag = 1;
  total = 0;
  registrosPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;
  
  constructor(
    private servicioProductos: ProductoService
  ){

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicioProductos.listarRegistrosPaginados(this.pag).subscribe({
      next: (datos) => {
        this.listaRegistros = datos.registros;
        this.total = datos.totalRegistros;
      },
      error: (err) => {
        alert("Error leyendo la información.")
      }
    });
  }
}
