import { Component } from '@angular/core';
import { Noticia } from '../model/noticia';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticia : Noticia = new Noticia();

  constructor() {

    this.noticia.id = "1";
    this.noticia.data = "26/06/2019";
    this.noticia.titulo = "Dólar em Alta";
    this.noticia.resumo = "A previdência social não oficializa acordo";
    this.noticia.conteudo = "Conteúdo";
    this.noticia.img = "https://www.noticiascg.com.br/wp-content/uploads//2019/04/og_image.jpg";
  }

}
