import { Component, OnInit } from '@angular/core';
import { Noticia } from '../model/noticia';
import { mockNoticias } from '../model/noticias.mock';


@Component({
  selector: 'app-lista-de-noticias',
  templateUrl: './lista-de-noticias.page.html',
  styleUrls: ['./lista-de-noticias.page.scss'],
})
export class ListaDeNoticiasPage implements OnInit {

  noticias : Noticia[] = mockNoticias;

  constructor() { }

  ngOnInit() {
    
  }

}
