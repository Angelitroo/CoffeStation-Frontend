// Datos ficticios para la versión visual.
// Se sustituirán por las respuestas de los endpoints del backend.
import { Alergeno } from '../models/Alergeno';
import { Rol } from '../models/Rol';
import { Categoria } from '../models/Categoria';
import { Cupon } from '../models/Cupon';
import { Pedido } from '../models/Pedido';
import { Producto } from '../models/Producto';
import { ProductoRanking } from '../models/ProductoRanking';
import { ResumenDia } from '../models/ResumenDia';

// Rol del usuario simulado. Cambiarlo a 'BARISTA' o 'CLIENTE' muestra u oculta
// las acciones según los permisos (@PreAuthorize) del backend.
export const ROL_ACTUAL: Rol = 'ADMIN';

export const CATEGORIAS: Categoria[] = [
  { id: 1, nombre: 'Cafés', estado: true },
  { id: 2, nombre: 'Tés e infusiones', estado: true },
  { id: 3, nombre: 'Bollería', estado: true },
  { id: 4, nombre: 'Tostadas y salados', estado: true },
  { id: 5, nombre: 'Bebidas frías', estado: true },
  { id: 6, nombre: 'Temporada', estado: false },
];

export const ALERGENOS: Alergeno[] = [
  { id: 1, nombre: 'Gluten' },
  { id: 2, nombre: 'Crustáceos' },
  { id: 3, nombre: 'Huevos' },
  { id: 4, nombre: 'Pescado' },
  { id: 5, nombre: 'Cacahuetes' },
  { id: 6, nombre: 'Soja' },
  { id: 7, nombre: 'Lácteos' },
  { id: 8, nombre: 'Frutos de cáscara' },
  { id: 9, nombre: 'Apio' },
  { id: 10, nombre: 'Mostaza' },
  { id: 11, nombre: 'Sésamo' },
  { id: 12, nombre: 'Sulfitos' },
  { id: 13, nombre: 'Altramuces' },
  { id: 14, nombre: 'Moluscos' },
];

export const PRODUCTOS: Producto[] = [
  { id: 1, nombre: 'Espresso', descripcion: 'Café de especialidad, tueste medio', precioSinIva: 1.27, iva: 10, disponible: true, activo: true, categoria: 'Cafés', alergenos: [] },
  { id: 2, nombre: 'Cortado', descripcion: 'Espresso con un toque de leche', precioSinIva: 1.36, iva: 10, disponible: true, activo: true, categoria: 'Cafés', alergenos: ['Lácteos'] },
  { id: 3, nombre: 'Americano', descripcion: 'Espresso alargado con agua caliente', precioSinIva: 1.45, iva: 10, disponible: true, activo: true, categoria: 'Cafés', alergenos: [] },
  { id: 4, nombre: 'Cappuccino', descripcion: 'Espresso, leche vaporizada y espuma', precioSinIva: 2.18, iva: 10, disponible: true, activo: true, categoria: 'Cafés', alergenos: ['Lácteos'] },
  { id: 5, nombre: 'Flat white', descripcion: 'Doble ristretto con leche sedosa', precioSinIva: 2.45, iva: 10, disponible: true, activo: true, categoria: 'Cafés', alergenos: ['Lácteos'] },
  { id: 6, nombre: 'Latte de avena', descripcion: 'Espresso con bebida de avena', precioSinIva: 2.55, iva: 10, disponible: false, activo: true, categoria: 'Cafés', alergenos: ['Gluten'] },
  { id: 7, nombre: 'Matcha latte', descripcion: 'Té matcha ceremonial con leche', precioSinIva: 3.0, iva: 10, disponible: true, activo: true, categoria: 'Tés e infusiones', alergenos: ['Lácteos'] },
  { id: 8, nombre: 'Chai latte', descripcion: 'Té negro especiado con leche', precioSinIva: 2.82, iva: 10, disponible: true, activo: true, categoria: 'Tés e infusiones', alergenos: ['Lácteos'] },
  { id: 9, nombre: 'Rooibos vainilla', descripcion: 'Infusión sin teína', precioSinIva: 1.82, iva: 10, disponible: true, activo: true, categoria: 'Tés e infusiones', alergenos: [] },
  { id: 10, nombre: 'Croissant de mantequilla', descripcion: 'Hojaldre artesano del día', precioSinIva: 1.64, iva: 10, disponible: true, activo: true, categoria: 'Bollería', alergenos: ['Gluten', 'Lácteos', 'Huevos'] },
  { id: 11, nombre: 'Cinnamon roll', descripcion: 'Rollo de canela con glaseado', precioSinIva: 2.55, iva: 10, disponible: true, activo: true, categoria: 'Bollería', alergenos: ['Gluten', 'Lácteos', 'Huevos'] },
  { id: 12, nombre: 'Muffin de arándanos', descripcion: 'Bizcocho esponjoso con arándanos', precioSinIva: 2.27, iva: 10, disponible: false, activo: true, categoria: 'Bollería', alergenos: ['Gluten', 'Huevos'] },
  { id: 13, nombre: 'Tostada de aguacate', descripcion: 'Pan de masa madre, aguacate y sésamo', precioSinIva: 4.09, iva: 10, disponible: true, activo: true, categoria: 'Tostadas y salados', alergenos: ['Gluten', 'Sésamo'] },
  { id: 14, nombre: 'Sándwich mixto', descripcion: 'Jamón cocido y queso fundido', precioSinIva: 3.64, iva: 10, disponible: true, activo: true, categoria: 'Tostadas y salados', alergenos: ['Gluten', 'Lácteos'] },
  { id: 15, nombre: 'Cold brew', descripcion: 'Infusionado en frío durante 16 horas', precioSinIva: 2.73, iva: 10, disponible: true, activo: true, categoria: 'Bebidas frías', alergenos: [] },
  { id: 16, nombre: 'Zumo de naranja', descripcion: 'Naranja natural recién exprimida', precioSinIva: 2.73, iva: 10, disponible: true, activo: true, categoria: 'Bebidas frías', alergenos: [] },
  { id: 17, nombre: 'Pumpkin spice latte', descripcion: 'Especial de otoño', precioSinIva: 3.18, iva: 10, disponible: false, activo: false, categoria: 'Temporada', alergenos: ['Lácteos'] },
];

export const PEDIDOS: Pedido[] = [
  {
    id: 1348, fecha: '2026-11-17T12:41:00', numeroTurno: 48, baseImponible: 7.64, subtotal: 8.41, total: 8.41, estado: 'PENDIENTE',
    lineas: [
      { producto: 'Cappuccino', cantidad: 2, precioSinIva: 2.18, iva: 10, total: 4.8 },
      { producto: 'Croissant de mantequilla', cantidad: 2, precioSinIva: 1.64, iva: 10, total: 3.61 },
    ],
  },
  {
    id: 1347, fecha: '2026-11-17T12:38:00', numeroTurno: 47, baseImponible: 2.73, subtotal: 3.0, total: 3.0, estado: 'PENDIENTE',
    lineas: [{ producto: 'Cold brew', cantidad: 1, precioSinIva: 2.73, iva: 10, total: 3.0 }],
  },
  {
    id: 1346, fecha: '2026-11-17T12:35:00', numeroTurno: 46, baseImponible: 5.55, subtotal: 6.11, total: 5.5, estado: 'EN_PREPARACION', cupon: 'BIENVENIDA10', descuento: 0.61,
    lineas: [
      { producto: 'Matcha latte', cantidad: 1, precioSinIva: 3.0, iva: 10, total: 3.3 },
      { producto: 'Cinnamon roll', cantidad: 1, precioSinIva: 2.55, iva: 10, total: 2.81 },
    ],
  },
  {
    id: 1345, fecha: '2026-11-17T12:31:00', numeroTurno: 45, baseImponible: 7.9, subtotal: 8.69, total: 8.69, estado: 'EN_PREPARACION',
    lineas: [
      { producto: 'Espresso', cantidad: 3, precioSinIva: 1.27, iva: 10, total: 4.19 },
      { producto: 'Tostada de aguacate', cantidad: 1, precioSinIva: 4.09, iva: 10, total: 4.5 },
    ],
  },
  {
    id: 1344, fecha: '2026-11-17T12:27:00', numeroTurno: 44, baseImponible: 6.09, subtotal: 6.7, total: 6.7, estado: 'LISTO',
    lineas: [
      { producto: 'Flat white', cantidad: 1, precioSinIva: 2.45, iva: 10, total: 2.7 },
      { producto: 'Sándwich mixto', cantidad: 1, precioSinIva: 3.64, iva: 10, total: 4.0 },
    ],
  },
  {
    id: 1343, fecha: '2026-11-17T12:20:00', numeroTurno: 43, baseImponible: 2.72, subtotal: 2.99, total: 2.99, estado: 'ENTREGADO',
    lineas: [{ producto: 'Cortado', cantidad: 2, precioSinIva: 1.36, iva: 10, total: 2.99 }],
  },
  {
    id: 1342, fecha: '2026-11-17T12:14:00', numeroTurno: 42, baseImponible: 11.65, subtotal: 12.81, total: 10.81, estado: 'ENTREGADO', cupon: 'OTONO2026', descuento: 2,
    lineas: [
      { producto: 'Chai latte', cantidad: 2, precioSinIva: 2.82, iva: 10, total: 6.2 },
      { producto: 'Croissant de mantequilla', cantidad: 2, precioSinIva: 1.64, iva: 10, total: 3.61 },
      { producto: 'Zumo de naranja', cantidad: 1, precioSinIva: 2.73, iva: 10, total: 3.0 },
    ],
  },
  {
    id: 1341, fecha: '2026-11-17T12:02:00', numeroTurno: 41, baseImponible: 1.45, subtotal: 1.59, total: 1.59, estado: 'CANCELADO',
    lineas: [{ producto: 'Americano', cantidad: 1, precioSinIva: 1.45, iva: 10, total: 1.59 }],
  },
  {
    id: 1340, fecha: '2026-11-17T11:56:00', numeroTurno: 40, baseImponible: 4.73, subtotal: 5.21, total: 5.21, estado: 'ENTREGADO',
    lineas: [
      { producto: 'Cappuccino', cantidad: 1, precioSinIva: 2.18, iva: 10, total: 2.4 },
      { producto: 'Cinnamon roll', cantidad: 1, precioSinIva: 2.55, iva: 10, total: 2.81 },
    ],
  },
  {
    id: 1339, fecha: '2026-11-17T11:48:00', numeroTurno: 39, baseImponible: 10.0, subtotal: 11.0, total: 11.0, estado: 'ENTREGADO',
    lineas: [
      { producto: 'Rooibos vainilla', cantidad: 1, precioSinIva: 1.82, iva: 10, total: 2.0 },
      { producto: 'Tostada de aguacate', cantidad: 2, precioSinIva: 4.09, iva: 10, total: 9.0 },
    ],
  },
];

// Pedidos que aparecen en el panel (pendientes, en preparación o listos)
export const PEDIDOS_EN_CURSO: Pedido[] = PEDIDOS.slice(0, 5);

// Pedido de ejemplo para la vista de detalle y el ticket de "Nuevo pedido"
export const PEDIDO_EJEMPLO: Pedido = PEDIDOS[2];

export const CUPONES: Cupon[] = [
  { id: 1, codigo: 'BIENVENIDA10', tipo: 'PORCENTAJE', valor: 10, fechaInicio: '2026-01-01T00:00:00', fechaFin: '2026-12-31T23:59:00', maxUsos: 500, usos: 214 },
  { id: 2, codigo: 'OTONO2026', tipo: 'IMPORTE_FIJO', valor: 2, fechaInicio: '2026-09-22T00:00:00', fechaFin: '2026-12-20T23:59:00', maxUsos: 200, usos: 87, importeMinimo: 10 },
  { id: 3, codigo: 'CAFE-LUCIA', tipo: 'PORCENTAJE', valor: 15, fechaInicio: '2026-11-01T00:00:00', fechaFin: '2026-11-30T23:59:00', maxUsos: 3, usos: 1, cliente: 'Lucía Fernández' },
  { id: 4, codigo: 'BLACKFRIDAY', tipo: 'PORCENTAJE', valor: 25, fechaInicio: '2026-11-27T00:00:00', fechaFin: '2026-11-29T23:59:00', maxUsos: 300, usos: 0, importeMinimo: 5 },
  { id: 5, codigo: 'DESAYUNO3', tipo: 'IMPORTE_FIJO', valor: 3, fechaInicio: '2026-10-01T00:00:00', fechaFin: '2026-12-31T23:59:00', maxUsos: 50, usos: 50, importeMinimo: 12 },
  { id: 6, codigo: 'VERANO26', tipo: 'PORCENTAJE', valor: 20, fechaInicio: '2026-06-21T00:00:00', fechaFin: '2026-09-21T23:59:00', maxUsos: 400, usos: 312 },
];

export const RESUMEN_HOY: ResumenDia = {
  fecha: '2026-11-17',
  numeroPedidos: 48,
  base: 289.45,
  total: 318.4,
};

export const VENTAS_SEMANA: ResumenDia[] = [
  { fecha: '2026-11-11', numeroPedidos: 112, base: 652.3, total: 717.53 },
  { fecha: '2026-11-12', numeroPedidos: 98, base: 571.8, total: 628.98 },
  { fecha: '2026-11-13', numeroPedidos: 105, base: 610.45, total: 671.5 },
  { fecha: '2026-11-14', numeroPedidos: 131, base: 784.1, total: 862.51 },
  { fecha: '2026-11-15', numeroPedidos: 156, base: 921.6, total: 1013.76 },
  { fecha: '2026-11-16', numeroPedidos: 142, base: 847.2, total: 931.92 },
  { fecha: '2026-11-17', numeroPedidos: 48, base: 289.45, total: 318.4 },
];

export const RANKING: ProductoRanking[] = [
  { id: 4, nombre: 'Cappuccino', cantidad: 186 },
  { id: 1, nombre: 'Espresso', cantidad: 154 },
  { id: 10, nombre: 'Croissant de mantequilla', cantidad: 121 },
  { id: 5, nombre: 'Flat white', cantidad: 98 },
  { id: 13, nombre: 'Tostada de aguacate', cantidad: 76 },
  { id: 7, nombre: 'Matcha latte', cantidad: 64 },
  { id: 15, nombre: 'Cold brew', cantidad: 41 },
];

// Productos más vendidos que aparecen en el panel
export const RANKING_TOP: ProductoRanking[] = RANKING.slice(0, 5);
