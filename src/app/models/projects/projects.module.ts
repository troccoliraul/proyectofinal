export class Project {
  id?: number;
  proyecto: string;
  url_proyecto: string;
  descripcion: string;


  constructor(proyecto: string, url_proyecto: string, descripcion:string) {
      this.proyecto = proyecto;
      this.url_proyecto = url_proyecto;
      this.descripcion = descripcion;

  }
}
