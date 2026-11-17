import { EstadoPedido } from './EstadoPedido';
import { LineaPedido } from './LineaPedido';

export interface Pedido {
  id: number;
  fecha: string;
  numeroTurno: number;
  baseImponible: number;
  subtotal: number;
  total: number;
  estado: EstadoPedido;
  cupon?: string; // código del Cupon aplicado
  descuento?: number; // importe de la entidad Descuento asociada
  lineas: LineaPedido[];
}
