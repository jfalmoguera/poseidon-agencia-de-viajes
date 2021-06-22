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
    { id: 1, valor: 'Familiar' },
    { id: 2, valor: 'Trabajo' },
    { id: 3, valor: 'LunaDeMiel' },
    { id: 4, valor: 'AhoraMismoPorFavor' },
    { id: 5, valor: 'Aventura' },
    { id: 6, valor: 'Cultural' },
    { id: 7, valor: 'Luxury' },
    { id: 8, valor: 'Gastronomico' },
  ];

  constructor() {
    this.viajes = [{
      id: '13456789643gf4dsg3f7dgdsf3',
      nombre: 'Un placer para el paladar',
      destino: 'Galicia',
      tipoDeViajeId: TipoDeViaje.Gastronomico,
      duracion: 14,
      enOferta: false,
      estado: 1,
      plazas: 30
    }];
  }

  getViajes(): Viaje[] {
    return [...this.viajes];
  }

  getViajeById(id: string): Viaje | undefined {
    return this.viajes.find(x => x.id === id);
  }

  guardar(Viaje: Viaje): Viaje | null {

    return null;
  }

  eliminar(id: string): boolean {

    return true;
  }

  getTiposDeViajes(): IdValor[] {
    return this.tiposDeViaje;
  }

}
