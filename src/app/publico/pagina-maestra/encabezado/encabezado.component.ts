import { Component } from '@angular/core';
import { UsuarioValidadoModel } from 'src/app/modelos/usuario.validado.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

constructor(
  private servicioSeguridad: SeguridadService
){

}

  sesionActiva:boolean = false;

  ngOnInit(){
    this.ValidarSesion();
  }

  ValidarSesion(){
    this.servicioSeguridad.ObtenerDatosSesion().subscribe({
      next: (datos:UsuarioValidadoModel)=>{
        if(datos.token != ""){
          this.sesionActiva = true;
        }else{
          this.sesionActiva = false;
        }
      },
      error:(err:any) =>{

      }
    });
  }

}
