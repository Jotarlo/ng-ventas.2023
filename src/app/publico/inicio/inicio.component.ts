import { Component } from '@angular/core';
import { ProductoModel } from 'src/app/modelos/producto.model';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  listaRegistros: ProductoModel[] = [];

  constructor(
    private servicioParametrizacion: ParametrosService
  ){

  }

  ngOnInit(){
    this.servicioParametrizacion.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {

      }
    });
  }

}
