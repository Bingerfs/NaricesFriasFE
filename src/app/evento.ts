export class Evento
{
    id: number;
    titulo: string;
    // fecha: string;
    fecha: Date;
    lugar: string;
    hora: string;
    descripcion: string;
}

export enum Mes{
    Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre
}

