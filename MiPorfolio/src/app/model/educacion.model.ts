export class Educacion{

    id_educacion: number;
    institucion: string;
    titulo: string;
    url_logoinst: string;
    fecha_inicio: string;
    fecha_final: string;
    id_persona: number;

 constructor (id_educacion: number, institucion: string, titulo: string, url_logoinst: string,
    fecha_inicio: string, fecha_final: string, id_persona: number)
 {
    this.id_educacion= id_persona;
    this.institucion= institucion;
    this.titulo= titulo;
    this.url_logoinst= url_logoinst;
    this.fecha_inicio= fecha_inicio;
    this.fecha_final= fecha_final;
    this.id_persona= id_persona;
 }
}