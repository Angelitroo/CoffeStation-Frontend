export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precioSinIva: number;
  iva: number;
  pvp: number; // precio con IVA, para mostrar en la carta
  disponible: boolean;
  activo: boolean;
  categoria: string;
  alergenos: string[];
}
