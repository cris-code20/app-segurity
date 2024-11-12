import { Component} from '@angular/core';

@Component({
  selector: 'app-ofical',
  templateUrl: './ofical.page.html',
  styleUrls: ['./ofical.page.scss'],
})
export class OficalPage {
  oficial = {
    foto: 'assets/cris.jpg',
    nombre: 'Cristopher',
    apellido: 'Diaz',
    matricula: '2020-202010703',
    reflexion: 'Protegiendo y sirviendo a la comunidad.'
  };
}
