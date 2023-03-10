import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './excluir-produto/excluir-produto.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';

import { ProdutoListComponent } from './produto-list/produto-list.component';

const routes: Routes = [
  { path:'list', component: ProdutoListComponent },
  { path: 'novo', component: NovoProdutoComponent },
  { path: 'detalhes', component: DetalhesProdutoComponent },
  { path: 'editar', component: EditarProdutoComponent },
  { path: 'excluir', component: ExcluirProdutoComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
