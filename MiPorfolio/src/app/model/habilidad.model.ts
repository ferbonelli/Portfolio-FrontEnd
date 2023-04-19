export class Habilidad {
    id_habilidad: number;
    nombre: string;
    porcentaje: number;
    id_persona: number;

    constructor(id_habilidad:number ,nombre: string, porcentaje: number, id_persona: number) {
        
        this.id_habilidad = id_habilidad;
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.id_persona = id_persona;
    }
}
