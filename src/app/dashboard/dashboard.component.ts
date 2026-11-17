import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PEDIDOS_EN_CURSO, RANKING_TOP } from '../mocks/mock-data';
import { EstadobadgeComponent } from '../estadobadge/estadobadge.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CurrencyPipe, DatePipe, EstadobadgeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  pedidos = PEDIDOS_EN_CURSO;
  ranking = RANKING_TOP;
}
