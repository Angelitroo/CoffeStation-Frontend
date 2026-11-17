import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ALERGENOS, CATEGORIAS } from '../mocks/mock-data';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-productoform',
  imports: [RouterLink, IconComponent],
  templateUrl: './productoform.component.html',
  styleUrl: './productoform.component.scss',
})
export class ProductoformComponent {
  categorias = CATEGORIAS;
  alergenos = ALERGENOS;
}
