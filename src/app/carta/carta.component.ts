import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIAS, PRODUCTOS } from '../mocks/mock-data';
import { IconComponent } from '../icon/icon.component';
import { PrecioivaPipe } from '../pipes/precioiva.pipe';

// Carta que ve el cliente: productos activos agrupados por categoría (GET /productos, GET /categorias)
@Component({
  selector: 'app-carta',
  imports: [RouterLink, CurrencyPipe, IconComponent, PrecioivaPipe],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.scss',
})
export class CartaComponent {
  // true en "Nuevo pedido": muestra el botón Añadir en cada producto
  @Input() pedir = false;

  categorias = CATEGORIAS;
  productos = PRODUCTOS;
}
