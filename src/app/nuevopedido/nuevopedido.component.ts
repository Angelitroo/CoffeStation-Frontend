import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PEDIDO_EJEMPLO, PRODUCTOS } from '../mocks/mock-data';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-nuevopedido',
  imports: [CurrencyPipe, IconComponent],
  templateUrl: './nuevopedido.component.html',
  styleUrl: './nuevopedido.component.scss',
})
export class NuevopedidoComponent {
  productos = PRODUCTOS;
  ticket = PEDIDO_EJEMPLO;
}
