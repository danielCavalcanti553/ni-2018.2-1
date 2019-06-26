import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'pagina-contato', loadChildren: './pagina-contato/pagina-contato.module#PaginaContatoPageModule' },
  { path: 'lista-de-noticias', loadChildren: './lista-de-noticias/lista-de-noticias.module#ListaDeNoticiasPageModule' },
  { path: 'filmes', loadChildren: './filmes/filmes.module#FilmesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
