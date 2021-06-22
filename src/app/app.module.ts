import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';
import { ViajesCardListComponent } from './viajes-list/viajes-card-list/viajes-card-list.component';
import { ViajesTableListComponent } from './viajes-list/viajes-table-list/viajes-table-list.component';
import { ViajesFilterComponent } from './viajes-list/viajes-filter/viajes-filter.component';
import { ViajesEditComponent } from './viajes-edit/viajes-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

import es from '@angular/common/locales/es';
import it from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
import { TipoDeViajePipe } from './tipo-de-viaje.pipe';

registerLocaleData(es);
registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    ViajesListComponent,
    ViajesCardListComponent,
    ViajesTableListComponent,
    ViajesFilterComponent,
    ViajesEditComponent,
    TipoDeViajePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
