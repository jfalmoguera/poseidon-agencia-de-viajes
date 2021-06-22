import { TipoDeViaje } from "./enums/tipo-de-viaje.enum";

export interface Viaje {
    id: string;
    nombre: string;
    tipoDeViajeId: TipoDeViaje;
    duracion: number;
    destino: string;
    plazas: number;
    precio: number;
    enOferta: boolean;
    estado: number;
    fechaSalida: Date;
}