import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Viaje } from '../models/viaje';
import { IdValor } from '../services/id-valor';

@Component({
  selector: 'app-viajes-edit',
  templateUrl: './viajes-edit.component.html',
  styleUrls: ['./viajes-edit.component.scss']
})
export class ViajesEditComponent implements OnInit, OnChanges {

  @Input() viaje: Viaje | null = null;
  @Input() tiposDeViaje: IdValor[] = [];
  @Output() guardar = new EventEmitter<Viaje>();

  submited = false;

  viajesForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.viajesForm = fb.group({
      id: [''],
      nombre: ['', Validators.required],
      tipoDeViajeId: ['', Validators.required],
      duracion: ['', [Validators.required, Validators.min(1)]],
      destino: ['', Validators.required],
      plazas: ['', [Validators.required, Validators.min(1)]],
      enOferta: [''],
      estado: ['']
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.viaje) {
      this.viajesForm.patchValue(changes.viaje.currentValue);
    }
  }

  ngOnInit(): void {
  }

  guardarClick(form: FormGroup): void {

    this.submited = true;

    if (form.valid) {      
      this.guardar.emit(form.value);     
      this.resetForm();
    }
  }

  resetForm(): void {
    this.submited = false;
    this.viajesForm.reset();
  }


}
