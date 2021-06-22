import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      destino: ['', [Validators.required, this.validarDestino]],
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

    this.viajesForm.controls.destino.valueChanges.subscribe((x: string) => {
      // if (x?.toLowerCase() === 'malaga') {
      //   this.viajesForm.controls.enOferta.setValue(true);
      // }

      if (x?.toLowerCase() === 'galicia') {
        this.viajesForm.controls.enOferta.disable();
      } else {
        this.viajesForm.controls.enOferta.enable();
      }
    });

    this.viajesForm.valueChanges.subscribe(x => {
      console.log(x);
    })

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

  validarDestino(control: FormControl): { [s: string]: boolean } | null {

    if (control.value?.toLowerCase() === 'londres') {
      return { invalidDestination: true }
    }

    return null;
  }


}
