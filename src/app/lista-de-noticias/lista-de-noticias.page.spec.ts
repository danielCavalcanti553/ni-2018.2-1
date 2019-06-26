import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeNoticiasPage } from './lista-de-noticias.page';

describe('ListaDeNoticiasPage', () => {
  let component: ListaDeNoticiasPage;
  let fixture: ComponentFixture<ListaDeNoticiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeNoticiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeNoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
