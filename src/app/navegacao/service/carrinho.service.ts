import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produto } from 'src/app/produto/models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itensCarrinho: Produto[] = [];
  private itemAdicionadoSubject = new Subject<Produto>();
  private itemRemovidoSubject = new Subject<Produto>();
  
  constructor() { }

  adicionarItem(produto: Produto) {    
      produto.quantidade = 1;
      produto.subTotal = produto.valor;
      this.itensCarrinho.push(produto); 
      this.itemAdicionadoSubject.next(produto);
      
  }

  getItens(): Produto[]{
    return this.itensCarrinho;
  }

  removerItem(id: string): Produto[]{
    const index = this.itensCarrinho.findIndex(p => p.id === id);
    if (index !== -1) {
      const produto = this.itensCarrinho.splice(index, 1)[0];
      this.itemRemovidoSubject.next(produto);
    }
    return this.itensCarrinho;
  }

  limparCarrinho() {
    this.itensCarrinho = [];
  }

  atualizarItem(id: string, quantidade: number): Produto[] {
    const produto = this.itensCarrinho.find(p => p.id === id);
    if (produto) {
      produto.quantidade = quantidade;
      if (quantidade === 0) {
        this.removerItem(id);
      }
    }
    return this.itensCarrinho;
  }

  getItemAdicionadoObservable() {
    return this.itemAdicionadoSubject.asObservable();
  }

  getItemRemovidoObservable() {
    return this.itemRemovidoSubject.asObservable();
  }

}
