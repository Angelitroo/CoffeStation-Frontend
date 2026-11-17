import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ALERGENOS, CATEGORIAS, PRODUCTOS } from '../mocks/mock-data';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-productos',
  imports: [RouterLink, CurrencyPipe, IconComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent {
  productos = PRODUCTOS;
  categorias = CATEGORIAS;
  alergenos = ALERGENOS;
}
