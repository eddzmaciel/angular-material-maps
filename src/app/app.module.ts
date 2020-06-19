import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

//import material
import { MaterialModule } from './material.module';

import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    //GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdWGvCbQC_HkflmHDKlz_CRQqVM88A03o'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
