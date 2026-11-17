import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROL_ACTUAL } from '../mocks/mock-data';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // Pantalla de inicio: el panel "Hoy" solo es para ADMIN
  inicio = ROL_ACTUAL === 'ADMIN' ? '/dashboard' : '/pedidos';
}
