import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeNoticiasPage } from './lista-de-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeNoticiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeNoticiasPage]
})
export class ListaDeNoticiasPageModule {}
