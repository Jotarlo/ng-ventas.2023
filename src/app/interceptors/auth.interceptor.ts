import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SeguridadService } from "../servicios/seguridad.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private servicioSeguridad: SeguridadService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.servicioSeguridad.ObtenerTokenLocalStorage();
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });
        return next.handle(request);
    }
}