import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PEDIDOS, ROL_ACTUAL } from '../mocks/mock-data';
import { EstadobadgeComponent } from '../estadobadge/estadobadge.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-pedidos',
  imports: [RouterLink, CurrencyPipe, DatePipe, EstadobadgeComponent, IconComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss',
})
export class PedidosComponent {
  rol = ROL_ACTUAL;
  pedidos = PEDIDOS;
}
