import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Producto } from '../models/Producto';
import { PrecioivaPipe } from '../pipes/precioiva.pipe';

// Producto de la carta pública: nombre, descripción, alérgenos, precio y foto
@Component({
  selector: 'app-productocard',
  imports: [CurrencyPipe, PrecioivaPipe],
  templateUrl: './productocard.component.html',
  styleUrl: './productocard.component.scss',
})
export class ProductocardComponent {
  @Input() producto!: Producto;
}
