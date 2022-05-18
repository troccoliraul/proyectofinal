export class Education {
  id?: number;
  centro: string;
  titulo: string;
  anio_ingreso: string;
  anio_egreso: string;


  constructor(centro: string, titulo: string, anio_ingreso: string, anio_egreso:string) {
      this.centro = centro;
      this.titulo = titulo;
      this.anio_ingreso = anio_ingreso;
      this.anio_egreso = anio_egreso;

  }
}
