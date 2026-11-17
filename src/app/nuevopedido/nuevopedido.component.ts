import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PEDIDO_EJEMPLO, PRODUCTOS, ROL_ACTUAL } from '../mocks/mock-data';
import { CartaComponent } from '../carta/carta.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-nuevopedido',
  imports: [CurrencyPipe, IconComponent, CartaComponent],
  templateUrl: './nuevopedido.component.html',
  styleUrl: './nuevopedido.component.scss',
})
export class NuevopedidoComponent {
  rol = ROL_ACTUAL;
  productos = PRODUCTOS;
  ticket = PEDIDO_EJEMPLO;
}
