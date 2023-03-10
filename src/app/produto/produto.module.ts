import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './excluir-produto/excluir-produto.component';


@NgModule({
  declarations: [ProdutoListComponent, NovoProdutoComponent, DetalhesProdutoComponent, EditarProdutoComponent, ExcluirProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
