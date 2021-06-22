import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoDeViaje'
})
export class TipoDeViajePipe implements PipeTransform {

  transform(tipoDeViajeId: number): unknown {
    return 'buscate la vida';
  }

}
