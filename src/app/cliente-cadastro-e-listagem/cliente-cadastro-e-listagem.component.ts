import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes/clientes.service';
import { MessageService } from 'primeng/components/common/messageservice';

import { FormGroup } from '@angular/forms';
import { VendasService } from '../vendas/vendas.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cliente-cadastro-e-listagem',
  templateUrl: './cliente-cadastro-e-listagem.component.html',
  styleUrls: ['./cliente-cadastro-e-listagem.component.css']
})
export class ClienteCadastroEListagemComponent implements OnInit {

  cliente: any;
  clientes: Array<any>;

  constructor(private clienteService: ClientesService,
     private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.clienteService.listarClientes().subscribe(response => this.clientes = response);
    this.novoCadastro();
  }

  novoCadastro() {
    this.cliente = { nome: '' };
  }

  adicionar(frm: FormGroup) {
      this.clienteService.adicionar(this.cliente).subscribe(response => {
      frm.reset();

      this.novoCadastro();

      this.messageService.add({ severity: 'success', detail: 'Cliente cadastrado com sucesso'})

      this.clienteService.listarClientes().subscribe(response => this.clientes = response);
    })
  }

  deletar(cliente: any) {

    this.confirmationService.confirm({
      message: 'Você deseja mesmo deletar este cliente?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.clienteService.deletar(cliente).subscribe(response =>{

        this.messageService.add({ severity: 'success', detail: 'Cliente deletado com sucesso'})
    
        this.clienteService.listarClientes().subscribe(response => this.clientes = response);
        })
      }
    });

    
  }

}
