import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ALERGENOS, CATEGORIAS, PRODUCTOS, ROL_ACTUAL } from '../mocks/mock-data';
import { CartaComponent } from '../carta/carta.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-productos',
  imports: [RouterLink, CurrencyPipe, IconComponent, CartaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent {
  rol = ROL_ACTUAL;
  productos = PRODUCTOS;
  categorias = CATEGORIAS;
  alergenos = ALERGENOS;
}
