import { Component, OnInit } from '@angular/core';
import { Viaje } from './models/viaje';
import { ViajesFilter } from './models/viajes-filter';
import { IdValor } from './services/id-valor';
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
  tiposDeViaje: IdValor[] = [];

  constructor(private viajesModelService: ViajesModelService) { }

  ngOnInit() {
    this.cargarViajes();
    this.tiposDeViaje = this.viajesModelService.getTiposDeViajes();
  }

  editarClick(id: string) {
    this.viajesModelService.getViajeById(id).subscribe(viaje => {
      if (viaje) {
        this.viajeEdicion = viaje;
      }
    });
  }

  borrarClick(id: string): void {
    if (id && window.confirm('¿Quieres borrar este viaje')) {
      this.viajesModelService.eliminar(id).subscribe(x => {
        if (x) {
          this.cargarViajes();
        }
      })
    }
  }

  guardar(viaje: Viaje): void {
    if (viaje) {
      this.viajesModelService.guardar(viaje).subscribe(() => this.cargarViajes());
    }
  }

  searchClick(filtro: ViajesFilter): void {
    if (filtro) {
      this.viajesModelService.buscar(filtro).subscribe(viajes => {
        this.viajes = viajes;
      })
    }
  }

  private cargarViajes() {
    this.viajesModelService.getViajes().subscribe(x => {
      this.viajes = x;
    });
  }
}
