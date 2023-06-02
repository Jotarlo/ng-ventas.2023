import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ArchivoModel } from 'src/app/modelos/archivo.model';
import { ProductoModel } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/servicios/parametros/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

  nombreArchivoCargado: String = '';
  fGroup: FormGroup = new FormGroup({});
  cargaArchivoFG: FormGroup = new FormGroup({});
  archivoCargado: Boolean = false;
  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;
  recordId: number = 0;

  constructor(
    private fb: FormBuilder,
    private servicio: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.ConstruirFormularioDatos();
    this.ConstruirFormularioArchivo();
    this.BuscarRegistro();
  }

  BuscarRegistro() {
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: ProductoModel) => {
        this.obtenerFgDatos["id"].setValue(datos.id);
        this.obtenerFgDatos["nombre"].setValue(datos.nombre);
        this.obtenerFgDatos["precioVenta"].setValue(datos.precioVenta);
        this.obtenerFgDatos["cantidadDisponible"].setValue(datos.cantidadDisponible);
        this.obtenerFgDatos["foto"].setValue(datos.foto);
        this.nombreArchivoCargado = datos.foto!;
        this.archivoCargado = true;
      },
      error: (err) => {
        alert("El registro no existe.")
      }
    });
  }

  ConstruirFormularioDatos() {
    this.fGroup = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      precioVenta: ['', [Validators.required]],
      cantidadDisponible: ['', [Validators.required]],
      foto: ['', [Validators.required]]
    });
  }

  EditarRegistro() {
    if (this.fGroup.invalid) {
      alert("Debe diligenciar todo el formulario, incluyendo la carga del archivo.");
    } else {
      let model = this.obtenerRegistro();
      this.servicio.EditarRegistro(model).subscribe({
        next: (data: ProductoModel) => {
          alert("Información modificada correctamente");
          this.router.navigate(['/parametros/producto-listar']);
        },
        error: (err: any) => {
          alert("Ha ocurrido un error");
        }
      })
    }
  }

  obtenerRegistro(): ProductoModel {
    let model = new ProductoModel();
    model.id = parseInt(this.obtenerFgDatos["id"].value);
    model.nombre = this.obtenerFgDatos["nombre"].value;
    model.cantidadDisponible = this.obtenerFgDatos["cantidadDisponible"].value;
    model.precioVenta = this.obtenerFgDatos["precioVenta"].value;
    model.foto = this.obtenerFgDatos["foto"].value;
    return model;
  }

  get obtenerFgDatos() {
    return this.fGroup.controls;
  }

  /** Carga de archivo */

  ConstruirFormularioArchivo() {
    this.cargaArchivoFG = this.fb.group({
      archivo: ['', []]
    });
  }

  get obtenerFgArchivo() {
    return this.cargaArchivoFG.controls;
  }

  CargarArchivo() {
    const formData = new FormData();
    formData.append('file', this.cargaArchivoFG.controls["archivo"].value);
    this.servicio.CargarArchivo(formData).subscribe({
      next: (data: ArchivoModel) => {
        console.log(data);
        this.nombreArchivoCargado = data.file;
        this.obtenerFgDatos["foto"].setValue(this.nombreArchivoCargado);
        this.archivoCargado = true;
        alert("Archivo cargado correctamente.");
      },
      error: (err: any) => {
        alert("Error cargando el archivo");
      }
    });
  }

  CuandoSeleccionaArchivo(event: any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.obtenerFgArchivo["archivo"].setValue(f);
    }
  }

}
