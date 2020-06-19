import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marcador } from '../../classes/marcador.class';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Marcador,
    public formBuilder: FormBuilder
  ) {

    //creando el formuario
    this.forma = formBuilder.group({
      'titulo': data.titulo,
      'desc': data.desc
    });

    console.log('received params:', data);
  }

  ngOnInit(): void {
  }

  guardarCambios() {
    //este hace referencia al componente padre y podemos procesar datos y regresarselos al padre
    console.log('MapaEditarComponent', this.forma.value);
    this.dialogRef.close(this.forma.value);
  }

  onNoClick(): void {
    //este hace referencia al componente padre
    this.dialogRef.close();
  }

}
