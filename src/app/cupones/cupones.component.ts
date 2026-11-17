import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CUPONES } from '../mocks/mock-data';

@Component({
  selector: 'app-cupones',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './cupones.component.html',
  styleUrl: './cupones.component.scss',
})
export class CuponesComponent {
  cupones = CUPONES;
}
