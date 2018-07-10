import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MessageService } from 'primeng/components/common/messageservice';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


import { AppComponent } from './app.component';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { AppRoutingModule } from './/app-routing.module';
import { VendaGeralComponent } from './venda-geral/venda-geral.component';
import { ClienteCadastroEListagemComponent } from './cliente-cadastro-e-listagem/cliente-cadastro-e-listagem.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    VendasListagemComponent,
    VendaCadastroComponent,
    VendaGeralComponent,
    ClienteCadastroEListagemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    CurrencyMaskModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    GrowlModule,
    ConfirmDialogModule,
    MenubarModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    MessageService, ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }