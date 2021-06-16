import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-viajes-card-list',
  templateUrl: './viajes-card-list.component.html',
  styleUrls: ['./viajes-card-list.component.scss']
})
export class ViajesCardListComponent implements OnInit {

  @Input() viajes: Viaje[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
