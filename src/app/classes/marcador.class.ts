// esto es lo mismo que de abajo
// export class Marcador {
//     constructor(public lat: number, public lng: number) {

//     }
// }

export class Marcador {

    public lat: number;
    public lng: number;

    public titulo: string = 'sin titulo';
    public desc: string = 'sin descripcion';


    constructor(lat: number, lng: number) {
        //aqui estamos creando el marcador basado en los parametros que estamos recibiendo
        this.lat = lat;
        this.lng = lng;
    }

}