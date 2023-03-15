import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/produto/models/produto';
import { ProdutoService } from 'src/app/produto/services/produto.service';
import { environment } from 'src/environments/environment';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
})
export class ProdutoDetalhesComponent implements OnInit {
  imagens: string = environment.imagensUrl;
  produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtoService.obterPorId(id).subscribe(
      (produto) => {
        this.produto = produto;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  adicionarAoCarrinho() {
    this.carrinhoService.adicionarItem(this.produto);
    this.toastr.success('Produto adicionado ao carrinho com sucesso! 🎉', 'Sucesso! 😃');  
  }
}
