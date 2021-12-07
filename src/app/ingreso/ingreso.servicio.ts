import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta de coche', 1000),
  ];

  eliminar(ingreso: Ingreso) {
    const index: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index, 1);
  }
}
