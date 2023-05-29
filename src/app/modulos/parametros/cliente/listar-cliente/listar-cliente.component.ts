import { Component } from '@angular/core';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ClienteModel } from 'src/app/modelos/cliente.model';
import { PaginadorClienteModel } from 'src/app/modelos/paginador.cliente.model';
import { ClienteService } from 'src/app/servicios/parametros/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {
  listaRegistros:ClienteModel[] = [];
  pag = 1;
  total = 0;
  registrosPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private servicio: ClienteService
  ){

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicio.listarRegistros(this.pag).subscribe({
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
