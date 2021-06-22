import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';
import { ViajesCardListComponent } from './viajes-list/viajes-card-list/viajes-card-list.component';
import { ViajesTableListComponent } from './viajes-list/viajes-table-list/viajes-table-list.component';
import { ViajesFilterComponent } from './viajes-list/viajes-filter/viajes-filter.component';
import { ViajesEditComponent } from './viajes-edit/viajes-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViajesListComponent,
    ViajesCardListComponent,
    ViajesTableListComponent,
    ViajesFilterComponent,
    ViajesEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
