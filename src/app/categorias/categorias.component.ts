import { Component } from '@angular/core';
import { CATEGORIAS } from '../mocks/mock-data';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-categorias',
  imports: [IconComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss',
})
export class CategoriasComponent {
  categorias = CATEGORIAS;
}
