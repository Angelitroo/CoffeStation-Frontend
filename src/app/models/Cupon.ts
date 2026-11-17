import { TipoCupon } from './TipoCupon';

export interface Cupon {
  id: number;
  codigo: string;
  tipo: TipoCupon;
  valor: number;
  fechaInicio: string;
  fechaFin: string;
  maxUsos: number;
  usos: number;
  importeMinimo?: number;
  cliente?: string;
  estado: 'VIGENTE' | 'PROGRAMADO' | 'AGOTADO' | 'CADUCADO'; // estado visual
}
