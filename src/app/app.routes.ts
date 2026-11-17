import { Routes } from '@angular/router';
import { MenuizquierdaComponent } from './menuizquierda/menuizquierda.component';

// data.title  → título de la cabecera
// data.accion → botón principal de la cabecera; solo se muestra a los roles
//               que el backend autoriza para esa operación (@PreAuthorize)
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  // Pantallas públicas (sin layout)
  {
    path: 'login',
    title: 'Iniciar sesión · CoffeStation',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registro',
    title: 'Crear cuenta · CoffeStation',
    loadComponent: () => import('./registro/registro.component').then((m) => m.RegistroComponent),
  },

  // Aplicación interna (sidebar + cabecera)
  {
    path: '',
    component: MenuizquierdaComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Hoy · CoffeStation',
        data: { title: 'Hoy' },
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'pedidos',
        title: 'Pedidos · CoffeStation',
        data: {
          title: 'Pedidos',
          accion: { texto: 'Nuevo pedido', ruta: '/nuevo-pedido', roles: ['BARISTA', 'CLIENTE'] },
        },
        loadComponent: () =>
          import('./pedidos/pedidos.component').then((m) => m.PedidosComponent),
      },
      {
        path: 'pedidos/:id',
        title: 'Detalle del pedido · CoffeStation',
        data: { title: 'Detalle del pedido' },
        loadComponent: () =>
          import('./pedidodetalle/pedidodetalle.component').then((m) => m.PedidodetalleComponent),
      },
      {
        path: 'nuevo-pedido',
        title: 'Nuevo pedido · CoffeStation',
        data: { title: 'Nuevo pedido' },
        loadComponent: () => import('./nuevopedido/nuevopedido.component').then((m) => m.NuevopedidoComponent),
      },
      {
        path: 'productos',
        title: 'Productos · CoffeStation',
        data: {
          title: 'Productos',
          accion: { texto: 'Nuevo producto', ruta: '/productos/nuevo', roles: ['ADMIN'] },
        },
        loadComponent: () =>
          import('./productos/productos.component').then((m) => m.ProductosComponent),
      },
      {
        path: 'productos/nuevo',
        title: 'Nuevo producto · CoffeStation',
        data: { title: 'Nuevo producto' },
        loadComponent: () =>
          import('./productoform/productoform.component').then((m) => m.ProductoformComponent),
      },
      {
        path: 'productos/:id/editar',
        title: 'Editar producto · CoffeStation',
        data: { title: 'Editar producto' },
        loadComponent: () =>
          import('./productoform/productoform.component').then((m) => m.ProductoformComponent),
      },
      {
        path: 'categorias',
        title: 'Categorías · CoffeStation',
        data: { title: 'Categorías' },
        loadComponent: () => import('./categorias/categorias.component').then((m) => m.CategoriasComponent),
      },
      {
        path: 'cupones',
        title: 'Cupones · CoffeStation',
        data: { title: 'Cupones' },
        loadComponent: () => import('./cupones/cupones.component').then((m) => m.CuponesComponent),
      },
      {
        path: 'informes',
        title: 'Informes · CoffeStation',
        data: { title: 'Informes' },
        loadComponent: () => import('./informes/informes.component').then((m) => m.InformesComponent),
      },
    ],
  },

  { path: '**', redirectTo: 'pedidos' },
];
