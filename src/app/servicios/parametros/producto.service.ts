import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { PaginadorProductoModel } from 'src/app/modelos/paginador.producto.model';
import { ProductoModel } from 'src/app/modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }

  /**
   * Listado de productos
   * @returns 
   */
  listarRegistros(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.urlBase}producto?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`);
  }

  listarRegistrosPaginados(pag: number): Observable<PaginadorProductoModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorProductoModel>(`${this.urlBase}producto-paginado?filter={"limit":${limit}, "skip":${skip}}`);
  }

}
