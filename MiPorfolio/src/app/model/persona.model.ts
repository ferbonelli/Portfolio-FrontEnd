export class Persona {
    
    id_persona: number;
    nombre: string;;
    apellido: string;
    dni: string;
    url_foto: string;
    acerca_de: string;
    profesion: string;
    correo_electronico: string;
    celular: string;
    fecha_Nac: string;

    constructor(id_persona: number, nombre: string, apellido: string, dni: string, url_foto: string,
                acerca_de: string, profesion: string,
                correo_electronico: string, celular: string, fecha_Nac: string) {
        this.id_persona = id_persona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.url_foto = url_foto;
        this.acerca_de = acerca_de;
        this.profesion = profesion;
        this.correo_electronico = correo_electronico;
        this.celular = celular;
        this.fecha_Nac = fecha_Nac;
    }
}
