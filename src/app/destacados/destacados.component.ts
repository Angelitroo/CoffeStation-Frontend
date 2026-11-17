import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DESTACADOS } from '../mocks/mock-data';
import { PrecioivaPipe } from '../pipes/precioiva.pipe';

// Carrusel "Los favoritos de la casa" al comienzo de la carta (GET /informes/ranking)
@Component({
  selector: 'app-destacados',
  imports: [CurrencyPipe, PrecioivaPipe],
  templateUrl: './destacados.component.html',
  styleUrl: './destacados.component.scss',
})
export class DestacadosComponent {
  destacados = DESTACADOS;
}
