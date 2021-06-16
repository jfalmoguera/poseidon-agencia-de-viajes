import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TipoDeViaje } from 'src/app/models/enums/tipo-de-viaje.enum';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-viajes-card-list',
  templateUrl: './viajes-card-list.component.html',
  styleUrls: ['./viajes-card-list.component.scss']
})
export class ViajesCardListComponent implements OnInit, OnChanges {

  @Input() viajes: Viaje[] = [];
  viajesCard: Viaje[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.viajes) {
      this.viajes = [{
        id: '13456789643gf4dsg3f7dgdsf3',
        nombre: 'SUPER OFERTA',
        destino: 'Galicia',
        tipoDeViajeId: TipoDeViaje.Gastronomico,
        duracion: 14,
        enOferta: true,
        estado: 1,
        plazas: 30
      }, ...this.viajes];
    }
  }

  ngOnInit(): void {

  }

}
