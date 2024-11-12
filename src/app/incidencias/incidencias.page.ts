import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface Incidencia {
  titulo: string;
  fecha: string;
  descripcion: string;
  foto: string;
  audio: string;
}

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})


export class IncidenciasPage implements OnInit {

  incidencias: any[] = [];

  constructor() {}

  ngOnInit() {
    this.cargarIncidencias();
  }

  async cargarIncidencias() {
    const { value } = await Preferences.get({ key: 'incidencias' });
    if (value) {
      this.incidencias = JSON.parse(value);
    }
  }

  async eliminarTodasIncidencias() {
    this.incidencias = [];
    await Preferences.set({
      key: 'incidencias',
      value: JSON.stringify(this.incidencias)
    });
  }



}
