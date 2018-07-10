import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendaGeralComponent } from './venda-geral/venda-geral.component';
import { ClienteCadastroEListagemComponent } from './cliente-cadastro-e-listagem/cliente-cadastro-e-listagem.component';

const routes: Routes = [
  { path: 'vendas', component: VendaGeralComponent },
  { path: 'clientes', component: ClienteCadastroEListagemComponent }
];

@NgModule({
 exports: [ RouterModule ],
imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
