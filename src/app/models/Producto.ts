export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precioSinIva: number;
  iva: number;
  disponible: boolean;
  activo: boolean;
  categoria: string;
  alergenos: string[];
}
