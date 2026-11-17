import { TipoCupon } from './TipoCupon';

export interface Cupon {
  id: number;
  codigo: string;
  tipo: TipoCupon;
  valor: number;
  fechaInicio: string;
  fechaFin: string;
  maxUsos: number;
  usos: number; // GET /cupones/usos/{codigo}
  importeMinimo?: number;
  cliente?: string; // nombre del Cliente asociado (cupón personal)
}
