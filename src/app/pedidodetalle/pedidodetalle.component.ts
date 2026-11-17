import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PEDIDO_EJEMPLO } from '../mocks/mock-data';
import { EstadobadgeComponent } from '../estadobadge/estadobadge.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-pedidodetalle',
  imports: [RouterLink, CurrencyPipe, DatePipe, EstadobadgeComponent, IconComponent],
  templateUrl: './pedidodetalle.component.html',
  styleUrl: './pedidodetalle.component.scss',
})
export class PedidodetalleComponent {
  pedido = PEDIDO_EJEMPLO;
}
