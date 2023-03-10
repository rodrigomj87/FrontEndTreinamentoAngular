import { Component, OnInit } from '@angular/core';

import { Produto } from './../../_interfaces/produto.model';
import { ProdutosRepositoryService } from './../../shared/services/produtos-repository.service';

import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  
  produtos: Produto[];

  errorMessage: string = '';

  constructor(private repository: ProdutosRepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    
    this.getProdutos();
  }

  private getProdutos = () => {
    const apiAddress: string = 'lista';
    this.repository.getProdutos(apiAddress)
    .subscribe({
      next: (own: Produto[]) => this.produtos = own,
      error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
      }
    })
  }
}
