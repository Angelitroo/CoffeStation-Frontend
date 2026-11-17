import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIAS, FOTO_PORTADA, PRODUCTOS } from '../mocks/mock-data';
import { DestacadosComponent } from '../destacados/destacados.component';
import { IconComponent } from '../icon/icon.component';
import { ProductocardComponent } from '../productocard/productocard.component';

// Carta digital pública: página de inicio para cualquier visitante (GET /productos, GET /categorias)
@Component({
  selector: 'app-cartadigital',
  imports: [RouterLink, IconComponent, ProductocardComponent, DestacadosComponent],
  templateUrl: './cartadigital.component.html',
  styleUrl: './cartadigital.component.scss',
})
export class CartadigitalComponent {
  categorias = CATEGORIAS;
  productos = PRODUCTOS;
  portada = FOTO_PORTADA;

  // Muestra el campo de búsqueda en lugar del índice de categorías
  buscando = false;
}
