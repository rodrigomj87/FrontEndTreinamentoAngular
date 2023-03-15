import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { ProdutoService } from "../produto/services/produto.service";
import { ProdutoResolve } from "../produto/services/produto.resolve";
import { ProdutoGuard } from "../produto/services/produto.guard";
import { NgBrazil } from "ng-brazil";
import { FormsModule } from "@angular/forms";
import { MenuSidebarNavComponent } from './menu-sidebar-nav/menu-sidebar-nav.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoDetalhesComponent } from "./produto-detalhes/produto-detalhes.component";
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
    declarations: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        AcessoNegadoComponent,
        MenuSidebarNavComponent,
        CarrinhoComponent,
        ProdutoDetalhesComponent,
        CheckoutComponent
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        NgBrazil
    ],
    exports: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        AcessoNegadoComponent,
        MenuSidebarNavComponent,
        CarrinhoComponent,
        ProdutoDetalhesComponent,
        CheckoutComponent
    ],
    providers: [
        ProdutoService,
        ProdutoResolve,
        ProdutoGuard
    ],
})
export class NavegacaoModule { }