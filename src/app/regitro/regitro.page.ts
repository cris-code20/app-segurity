import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-regitro',
  templateUrl: './regitro.page.html',
  styleUrls: ['./regitro.page.scss'],
})
export class RegitroPage  {

  incidencia = {
    titulo: '',
    fecha: '',
    descripcion: '',
    foto: '',
    audio: ''
  };

  constructor() {}

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 90
      });

      if (image && image.dataUrl) {
        this.incidencia.foto = image.dataUrl;
      } else {
        console.error('No se pudo obtener la foto correctamente.');
      }
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }

  recordAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        this.incidencia.audio = URL.createObjectURL(audioBlob);
      };

      mediaRecorder.start();
    }).catch(error => {
      console.error('Error al grabar audio:', error);
    });
  }


  async guardarIncidencia() {
    const { value } = await Preferences.get({ key: 'incidencias' });
    let incidencias = value ? JSON.parse(value) : [];

    incidencias.push({
      titulo: this.incidencia.titulo,
      fecha: this.incidencia.fecha,
      descripcion: this.incidencia.descripcion,
      foto: this.incidencia.foto,
      audio: this.incidencia.audio
    });

    await Preferences.set({
      key: 'incidencias',
      value: JSON.stringify(incidencias)
    });

    this.incidencia = {
      titulo: '',
      fecha: '',
      descripcion: '',
      foto: '',
      audio: ''
    };
  }
}
