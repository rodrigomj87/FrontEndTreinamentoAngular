import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta.route';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [CadastroComponent, LoginComponent],
  imports: [
    CommonModule,
    ContaRoutingModule
  ]
})
export class ContaModule { }
