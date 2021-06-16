import { Component, OnInit } from '@angular/core';
import { TipoDeViaje } from '../models/enums/tipo-de-viaje.enum';
import { Viaje } from '../models/viaje';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss']
})
export class ViajesListComponent implements OnInit {

  mostrarTarjetas = false;
  viajes: Viaje[] = [];

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
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

      // this.viajes.push({
      //   id: '13456789643gf4dsg3f7dgdsf3',
      //   nombre: 'Un placer para el paladar',
      //   destino: 'Galicia',
      //   tipoDeViajeId: TipoDeViaje.Gastronomico,
      //   duracion: 14,
      //   enOferta: false,
      //   estado: 1,
      //   plazas: 30
      // });
    }, 5000);

  }

  cambiarVistaClick() {
    this.mostrarTarjetas = !this.mostrarTarjetas;
  }
}
