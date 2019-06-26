import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filme';
import { mockFilmes } from '../model/filmes.mock';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  filmes : Filme[] = mockFilmes;

  constructor() { }

  ngOnInit() {
    //console.log(this.filmes); // testar
  }

}
