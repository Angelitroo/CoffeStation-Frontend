import { Component } from '@angular/core';
import { CATEGORIAS, ROL_ACTUAL } from '../mocks/mock-data';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss',
})
export class CategoriasComponent {
  rol = ROL_ACTUAL;
  categorias = CATEGORIAS;
}
