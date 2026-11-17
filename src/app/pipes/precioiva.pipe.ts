import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/Producto';

// Precio de venta al público: el backend guarda precioSinIva e iva (%) por separado
@Pipe({ name: 'precioIva' })
export class PrecioivaPipe implements PipeTransform {
  transform(producto: Producto): number {
    return producto.precioSinIva * (1 + producto.iva / 100);
  }
}
