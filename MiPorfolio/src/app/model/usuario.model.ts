export class Usuario {
    id_usuario: number;
    username: string;
    password: string;
    id_persona: number;

    constructor(id_usuario:number ,username: string, password: string, id_persona: number) {
        this.id_usuario = id_usuario
        this.username = username;
        this.password = password;
        this.id_persona = id_persona;
    }
}
