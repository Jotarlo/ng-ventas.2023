import { Component } from '@angular/core';
import { ProductoModel } from 'src/app/modelos/producto.model';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  listaRegistros:ProductoModel[]=[];
  
  constructor(
    private servicioParametros: ParametrosService
  ){

  }

  ngOnInit(){
    this.servicioParametros.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {
        alert("Error leyendo la información.")
      }
    });
  }

}
