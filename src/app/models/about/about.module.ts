export class About {
  id?: number;
  apellido: string;
  nombre: string;
  fecha_nacimiento: string;
  correo: string;
  idioma: string;
  domicilio: string;
  telefono: string;
  sobre_mi: string;
  url_foto: string;
  url_img: string;


  constructor(apellido: string, nombre: string, fecha_nacimiento: string, correo:string, idioma:string, domicilio:string, telefono:string, sobre_mi:string, url_foto:string, url_img:string) {
      this.apellido = apellido;
      this.nombre = nombre;
      this.fecha_nacimiento = fecha_nacimiento;
      this.correo = correo;
      this.idioma = idioma;
      this.domicilio = domicilio;
      this.telefono = telefono;
      this.sobre_mi = sobre_mi;
      this.url_foto = url_foto;
      this.url_img = url_img;
  }
}
