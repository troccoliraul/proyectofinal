export class Experience {
  id?: number;
  nom_empresa: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  trabajo_actual: string;


  constructor(nom_empresa: string, fecha_inicio: string, fecha_fin: string, descripcion:string, trabajo_actual: string) {
      this.nom_empresa = nom_empresa;
      this.fecha_inicio = fecha_inicio;
      this.fecha_fin = fecha_fin;
      this.descripcion = descripcion;
      this.trabajo_actual = trabajo_actual;

  }
}
