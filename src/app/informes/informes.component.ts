import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RANKING, VENTAS_SEMANA } from '../mocks/mock-data';

@Component({
  selector: 'app-informes',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './informes.component.html',
  styleUrl: './informes.component.scss',
})
export class InformesComponent {
  semana = VENTAS_SEMANA;
  ranking = RANKING;
}
