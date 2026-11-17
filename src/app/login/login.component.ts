import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { ROL_ACTUAL } from '../mocks/mock-data';

@Component({
  selector: 'app-login',
  imports: [RouterLink, IconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // Pantalla de inicio: el panel "Hoy" solo es para ADMIN
  inicio = ROL_ACTUAL === 'ADMIN' ? '/dashboard' : '/pedidos';
}
