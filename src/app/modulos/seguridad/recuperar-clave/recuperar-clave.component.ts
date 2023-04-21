import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {
    
  }

  ngOnInit() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]]
    });
  }

  RecuperarClave() {
    if (this.fGroup.invalid) {
      alert("Debe ingresar los datos del usuario");
    }else{
      let usuario = this.obtenerFormGroup["usuario"].value;
      this.servicioSeguridad.RecuperarClavePorUsuario(usuario).subscribe({
        next: (datos:UsuarioModel) => {
          alert("Se ha enviado una nueva contraseña como mensaje de texto al número " + datos.celular)
        },
        error: (err) => {
          alert("Ha ocurrido un error enviando la nueva contraseña.")
        }
      });
    }
  }

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }


}
