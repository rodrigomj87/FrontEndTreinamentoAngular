import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EProdutoOrder } from 'src/app/enums/produto-order.enum';
import { Produto } from 'src/app/produto/models/produto';
import { ProdutoService } from 'src/app/produto/services/produto.service';
import { environment } from 'src/environments/environment';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  imagens: string = environment.imagensUrl;

  currentPage = 1;
  totalPages = 1;
  pageSize = 2;
  order = 0;

  public produtos: Produto[];
  summary: any = {};
  errorMessage: string;
  searchTerm: string;

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obterProdutos();
  }

  getPages(): number[] {
    const pageCount = this.summary ? this.summary.totalPages : 0;
    const pagesToShow = 3; // Define quantas páginas devem ser exibidas
    let pages = [];

    // Define o índice da primeira página que deve ser exibida
    let startIndex = Math.max(
      1,
      this.currentPage - Math.floor(pagesToShow / 2)
    );

    // Define o índice da última página que deve ser exibida
    let endIndex = Math.min(startIndex + pagesToShow - 1, pageCount);

    // Caso ainda seja possível exibir mais páginas, ajusta o índice da primeira página a ser exibida
    if (endIndex - startIndex < pagesToShow - 1) {
      startIndex = Math.max(1, endIndex - pagesToShow + 1);
    }

    for (let i = startIndex; i <= endIndex; i++) {
      pages.push(i);
    }

    return pages;
  }

  onPageClick(page: number) {
    if (page === this.currentPage) {
      return;
    }

    this.searchTerm = (document.querySelector('#q') as HTMLInputElement).value;

    this.currentPage = page;
    this.obterProdutos();
  }

  onFindClick() {
    this.searchTerm = (document.querySelector('#q') as HTMLInputElement).value;

    this.obterProdutos();
  }

  private obterProdutos() {
    let orderQuery = EProdutoOrder.NomeAsc; // define a ordem padrão como ordenação por nome
    const selectElement = document.querySelector(
      '.selectOrdem'
    ) as HTMLSelectElement;
    if (selectElement) {
      // obtém o valor selecionado no elemento select
      if (selectElement) {
        const selectedValue = Number(selectElement.value);
        if (selectedValue === 1) {
          orderQuery = EProdutoOrder.NomeDesc;
        } else if (selectedValue === 2) {
          orderQuery = EProdutoOrder.PrecoAsc;
        } else if (selectedValue === 3) {
          orderQuery = EProdutoOrder.PrecoDesc;
        }
      }
    }

    this.produtoService
      .obterTodosPaginado(
        this.currentPage,
        this.pageSize,
        orderQuery,
        this.searchTerm
      )
      .subscribe(
        (result) => {
          this.produtos = result.produtos;
          this.summary = result.summary;
          this.totalPages = this.summary.totalPages;
          this.ordenarPor(this.order);
          this.getPages();
        },
        (error) => {
          this.errorMessage = error;
        }
      );
  }

  ordenarPor(opcao: number) {
    switch (opcao) {
      case 0: // ordenar por nome do produto (A - Z)
        this.order = 0;
        break;
      case 1: // ordenar por nome do produto (Z - A)
        this.order = 1;
        break;
      case 2: // ordenar pelo menor preço
        this.order = 2;
        break;
      case 3: // ordenar pelo maior preço
        this.order = 3;
        break;
      default:
        break;
    }
  }

  onOrdenarChange() {
    this.obterProdutos();
  }

  private getOrder(order: number): EProdutoOrder {
    switch (order) {
      case 1:
        return EProdutoOrder.NomeDesc;
      case 2:
        return EProdutoOrder.PrecoAsc;
      case 3:
        return EProdutoOrder.PrecoDesc;
      default:
        return EProdutoOrder.NomeAsc;
    }
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarItem(produto)
    this.toastr.success('Produto adicionado ao carrinho com sucesso! 🎉', 'Sucesso! 😃');  
  }
}
