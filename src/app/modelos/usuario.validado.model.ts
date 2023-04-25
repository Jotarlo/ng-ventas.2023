import { PermisoModel } from "./permiso.model";
import { UsuarioModel } from "./usuario.model";

export class UsuarioValidadoModel{
    user?: UsuarioModel;
    token?: string = "";
    menu: PermisoModel[]=[]
}