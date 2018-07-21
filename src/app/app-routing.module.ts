import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendaGeralComponent } from './pages/venda-geral/venda-geral.component';
import { ClienteCadastroEListagemComponent } from './pages/cliente-cadastro-e-listagem/cliente-cadastro-e-listagem.component';
import { ProdutoCadastroEListagemComponent } from './pages/produto-cadastro-e-listagem/produto-cadastro-e-listagem.component';

const routes: Routes = [
  { path: 'vendas', component: VendaGeralComponent },
  { path: 'clientes', component: ClienteCadastroEListagemComponent },
  { path: 'produtos', component: ProdutoCadastroEListagemComponent }
];

@NgModule({
 exports: [ RouterModule ],
imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
