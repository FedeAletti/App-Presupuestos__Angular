import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { EgresoServicio } from './egreso/egreso.servicio';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    IngresoComponent,
    EgresoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [EgresoServicio, IngresoServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}
