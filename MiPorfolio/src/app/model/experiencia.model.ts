export class Experiencia{

    id_experiencia: number;
    empresa: string;
    puesto: string;
    descripcion: string;
    url_logo: string;
    fecha_desde: string;
    fecha_hasta: string;
    id_persona: number;

 constructor (id_experiencia: number, empresa: string, puesto: string, descripcion: string,
               url_logo: string,  fecha_desde: string, fecha_hasta: string, id_persona: number)
 {
    this.id_experiencia = id_experiencia;
    this.empresa= empresa;
    this.puesto= puesto;
    this.descripcion= descripcion;
    this.url_logo=url_logo;
    this.fecha_desde= fecha_desde;
    this.fecha_hasta=fecha_hasta;
    this.id_persona = id_persona;
 }
}