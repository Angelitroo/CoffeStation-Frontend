import { Routes } from '@angular/router';
import { MenuizquierdaComponent } from './menuizquierda/menuizquierda.component';

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
        title: 'Panel · CoffeStation',
        data: { title: 'Panel', subtitle: 'Resumen de la actividad de hoy' },
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'pedidos',
        title: 'Pedidos · CoffeStation',
        data: { title: 'Pedidos', subtitle: 'Seguimiento y estado de los pedidos' },
        loadComponent: () =>
          import('./pedidos/pedidos.component').then((m) => m.PedidosComponent),
      },
      {
        path: 'pedidos/:id',
        title: 'Detalle del pedido · CoffeStation',
        data: { title: 'Detalle del pedido', subtitle: 'Líneas, importes y estado' },
        loadComponent: () =>
          import('./pedidodetalle/pedidodetalle.component').then((m) => m.PedidodetalleComponent),
      },
      {
        path: 'nuevo-pedido',
        title: 'Nuevo pedido · CoffeStation',
        data: { title: 'Nuevo pedido', subtitle: 'Selecciona productos de la carta' },
        loadComponent: () => import('./nuevopedido/nuevopedido.component').then((m) => m.NuevopedidoComponent),
      },
      {
        path: 'productos',
        title: 'Productos · CoffeStation',
        data: { title: 'Productos', subtitle: 'Carta, precios y disponibilidad' },
        loadComponent: () =>
          import('./productos/productos.component').then((m) => m.ProductosComponent),
      },
      {
        path: 'productos/nuevo',
        title: 'Nuevo producto · CoffeStation',
        data: { title: 'Nuevo producto', subtitle: 'Añade un producto a la carta' },
        loadComponent: () =>
          import('./productoform/productoform.component').then((m) => m.ProductoformComponent),
      },
      {
        path: 'productos/:id/editar',
        title: 'Editar producto · CoffeStation',
        data: { title: 'Editar producto', subtitle: 'Modifica los datos del producto' },
        loadComponent: () =>
          import('./productoform/productoform.component').then((m) => m.ProductoformComponent),
      },
      {
        path: 'categorias',
        title: 'Categorías · CoffeStation',
        data: { title: 'Categorías', subtitle: 'Organización de la carta' },
        loadComponent: () => import('./categorias/categorias.component').then((m) => m.CategoriasComponent),
      },
      {
        path: 'cupones',
        title: 'Cupones · CoffeStation',
        data: { title: 'Cupones', subtitle: 'Descuentos y promociones' },
        loadComponent: () => import('./cupones/cupones.component').then((m) => m.CuponesComponent),
      },
      {
        path: 'informes',
        title: 'Informes · CoffeStation',
        data: { title: 'Informes', subtitle: 'Ventas diarias y productos más vendidos' },
        loadComponent: () => import('./informes/informes.component').then((m) => m.InformesComponent),
      },
    ],
  },

  { path: '**', redirectTo: 'dashboard' },
];
