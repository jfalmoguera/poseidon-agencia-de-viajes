import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoDeViaje } from '../models/enums/tipo-de-viaje.enum';
import { Viaje } from '../models/viaje';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss']
})
export class ViajesListComponent implements OnInit {

  @Output() editar = new EventEmitter<string>();
  @Input() viajes: Viaje[] = [];

  mostrarTarjetas = false;
  
  constructor() { }

  ngOnInit(): void {

   

  }

  cambiarVistaClick() {
    this.mostrarTarjetas = !this.mostrarTarjetas;
  }
}
