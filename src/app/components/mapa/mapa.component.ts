
import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MapaEditarComponent } from './mapa-editar.component';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  //es parecido a lo que hicimos con los Models en los proyectos anteriores
  marcadores: Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    //cargar marcadores del local storage
    const marcadoresGuardados = JSON.parse(localStorage.getItem('marcadores'));
    if (localStorage.getItem('marcadores')) {
      this.marcadores = marcadoresGuardados;
    }
    // console.log(marcadoresGuardados);
    // const nuevoMarcador = new Marcador(51.678418, 7.809007);
    // this.marcadores.push(nuevoMarcador);
  }


  ngOnInit(): void {
  }

  agregarMarcador(evento) {
    //aqui le estamos asignando un tipo de dato a los parametros
    const coords: { lat: number, lng: number } = evento.coords;
    //aqui estamos pusheando el marcador a nuestro array
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Agregado correctamente', 'cerrar', {
      duration: 900,
    });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Elimiando correctamente', 'cerrar', {
      duration: 2000,
    });
  }

  editarMarcador(marcador: Marcador) {

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });
  }






}
