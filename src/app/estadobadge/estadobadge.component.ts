import { Component, Input } from '@angular/core';
import { EstadoPedido } from '../models/EstadoPedido';

@Component({
  selector: 'app-estadobadge',
  templateUrl: './estadobadge.component.html',
  styleUrl: './estadobadge.component.scss',
})
export class EstadobadgeComponent {
  @Input() estado: EstadoPedido = 'PENDIENTE';
}
