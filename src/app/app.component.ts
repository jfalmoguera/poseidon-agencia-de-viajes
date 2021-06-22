import { Component, OnInit } from '@angular/core';
import { Viaje } from './models/viaje';
import { ViajesModelService } from './services/viajes-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'agencia-de-viajes';
  viajeEdicion: Viaje | null = null;
  viajes: Viaje[] = [];

  constructor(private viajesModelService: ViajesModelService) { }

  ngOnInit() {
    this.viajes = this.viajesModelService.getViajes();
  }

  editarClick(id: string) {

    const v = this.viajesModelService.getViajeById(id);
    
    if (v){
      this.viajeEdicion = v;
    }
  }
}
