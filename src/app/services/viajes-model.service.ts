import { Injectable } from '@angular/core';
import { TipoDeViaje } from '../models/enums/tipo-de-viaje.enum';
import { Viaje } from '../models/viaje';
import { IdValor } from './id-valor';

@Injectable({
  providedIn: 'root'
})
export class ViajesModelService {

  private viajes: Viaje[] = [];
  private tiposDeViaje: IdValor[] = [
    { id: 1, valor: 'Para la familia' },
    { id: 2, valor: 'Trabajo' },
    { id: 3, valor: 'Luna De Miel' },
    { id: 4, valor: 'Ahora Mismo Por Favor' },
    { id: 5, valor: 'Aventura' },
    { id: 6, valor: 'Cultural' },
    { id: 7, valor: 'Luxury' },
    { id: 8, valor: 'Gastronomico' },
  ];

  id = 1;

  constructor() {
    this.viajes = [{
      id: 'viaje_' + this.id++,
      nombre: 'Un placer para el paladar',
      destino: 'Galicia',
      tipoDeViajeId: TipoDeViaje.Gastronomico,
      duracion: 14,
      precio: 1240000,
      enOferta: false,
      estado: 1,
      plazas: 30,
      fechaSalida: new Date(2021, 7, 1)
    }];
  }

  getViajes(): Viaje[] {
    return [...this.viajes];
  }

  getViajeById(id: string): Viaje | undefined {
    return this.viajes.find(x => x.id === id);
  }

  guardar(viaje: Viaje): Viaje | null {

    if (viaje) {

      if (viaje.id) {
        const idx = this.viajes.findIndex(x => x.id === viaje.id);
        if (idx >= 0) {
          this.viajes[idx] = { ...viaje };
          return this.viajes[idx];
        }
      } else {
        this.viajes.push({ ...viaje, id: `viaje_${this.id++}` })
        return this.viajes[this.viajes.length - 1];
      }

    }

    return null;
  }

  eliminar(id: string): boolean {

    return true;
  }

  getTiposDeViajes(): IdValor[] {
    return this.tiposDeViaje;
  }

}
