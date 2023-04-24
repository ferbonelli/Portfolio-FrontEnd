export class Proyecto{

    id_proyecto: number;
    nombre: string;
    descripcion: string;
    url_proyecto: string;
    fecha_inicio: string;
    fecha_final: string;
    id_persona: number;

 constructor (id_proyecto: number, nombre: string, descripcion: string, url_proyecto: string,
    fecha_inicio: string, fecha_final: string, id_persona: number)
 {
    this.id_proyecto = id_proyecto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.url_proyecto = url_proyecto;
    this.fecha_inicio = fecha_inicio;
    this.fecha_final = fecha_final;
    this.id_persona = id_persona;
 }
}