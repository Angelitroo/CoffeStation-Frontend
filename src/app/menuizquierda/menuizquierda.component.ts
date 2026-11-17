import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { ROL_ACTUAL } from '../mocks/mock-data';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-menuizquierda',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './menuizquierda.component.html',
  styleUrl: './menuizquierda.component.scss',
})
export class MenuizquierdaComponent {
  private router = inject(Router);

  rol = ROL_ACTUAL;

  // Menú lateral en móvil
  menuAbierto = false;

  // Título de la vista actual, definido en el "data" de cada ruta
  pagina = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      tap(() => (this.menuAbierto = false)),
      map(() => this.datosRuta()),
    ),
    { initialValue: this.datosRuta() },
  );

  private datosRuta(): Data {
    let r = this.router.routerState.snapshot.root;
    while (r.firstChild) r = r.firstChild;
    return r.data;
  }
}
