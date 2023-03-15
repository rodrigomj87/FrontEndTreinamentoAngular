import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto/models/produto';
import { environment } from 'src/environments/environment';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  imagens: string = environment.imagensUrl;
  
  qtdProdutoItem = 1;
  valorTotalCarrinho: number = 0;
  itensCarrinho: Produto[];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.getItens();
    this.calcularTotalCarrinho(); 
  }

  increment(item: Produto) {
    item.quantidade++;
    item.subTotal = item.quantidade * item.valor;
    this.atualizarItem(item)
  }

  decrement(item: Produto) {
    if (item.quantidade > 1) {
      item.quantidade--;
      item.subTotal = item.quantidade * item.valor;
      this.atualizarItem(item)
    }
  }

  removerItem(id: string) {
    this.itensCarrinho = this.carrinhoService.removerItem(id);
    this.calcularTotalCarrinho()
  }

  atualizarItem(item: Produto) {
    // item.subTotal = item.valor * item.quantidade;
    this.itensCarrinho = this.carrinhoService.atualizarItem(item.id, item.quantidade);
    this.calcularTotalCarrinho();
  }

  calcularTotalCarrinho() {
    let total = 0;
    for (let item of this.itensCarrinho) {
      total += item.subTotal;
    }
    this.valorTotalCarrinho = total;
  }

}
