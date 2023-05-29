import { ClienteModel } from "./cliente.model";

export class PaginadorClienteModel{
    totalRegistros: number = 0;
    registros: ClienteModel[] = [];
}