import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html'
})
export class MenuLoginComponent implements OnInit, OnDestroy{

  token: string = "";
  user: any;
  email: string = "";
  localStorageUtils = new LocalStorageUtils();  

  qtdItensCarrinho = 0;
  private subscription: Subscription;

  constructor(private router: Router, private carrinhoService: CarrinhoService) {  }
  
  ngOnInit(): void {
    this.subscription = this.carrinhoService.getItemAdicionadoObservable().subscribe(
      produto => this.qtdItensCarrinho++
    );

    this.subscription.add(this.carrinhoService.getItemRemovidoObservable().subscribe(
      produto => this.qtdItensCarrinho--
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  usuarioLogado(): boolean {
    this.token = this.localStorageUtils.obterTokenUsuario();
    this.user = this.localStorageUtils.obterUsuario();

    if (this.user)
      this.email = this.user.email;

    return this.token !== null;
  }

  logout() {
    this.localStorageUtils.limparDadosLocaisUsuario();
    this.router.navigate(['/home']);
  }
}
