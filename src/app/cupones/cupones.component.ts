import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CUPONES } from '../mocks/mock-data';
import { IconComponent } from '../icon/icon.component';
import { StatcardComponent } from '../statcard/statcard.component';

@Component({
  selector: 'app-cupones',
  imports: [CurrencyPipe, DatePipe, IconComponent, StatcardComponent],
  templateUrl: './cupones.component.html',
  styleUrl: './cupones.component.scss',
})
export class CuponesComponent {
  cupones = CUPONES;
}
