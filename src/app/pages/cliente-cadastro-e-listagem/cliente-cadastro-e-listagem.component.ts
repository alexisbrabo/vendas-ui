import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

import { FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-cliente-cadastro-e-listagem',
  templateUrl: './cliente-cadastro-e-listagem.component.html',
  styleUrls: ['./cliente-cadastro-e-listagem.component.css']
})
export class ClienteCadastroEListagemComponent implements OnInit {

  cliente: any;
  clientes: Array<any>;
  errorMsg;

  constructor(private clienteService: ClientesService,
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.clienteService.listarClientes().subscribe(response => this.clientes = response);
    this.novoCadastro();
  }

  novoCadastro() {
    this.cliente = { nome: '' };
  }

  atualizarCliente(cliente: any) {
    this.clienteService.atualizar(cliente).subscribe(response => {

      this.messageService.add({ severity: 'info', detail: 'Cliente editado com sucesso' });

      this.clienteService.listarClientes().subscribe(response => this.clientes = response);

    })
  }

  adicionar(frm: FormGroup) {
    this.clienteService.adicionar(this.cliente).subscribe(response => {
      frm.reset();

      this.novoCadastro();

      this.messageService.add({ severity: 'success', detail: 'Cliente cadastrado com sucesso' })

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
        this.clienteService.deletar(cliente).subscribe(response => {

          this.messageService.add({ severity: 'success', detail: 'Cliente deletado com sucesso' })

          this.clienteService.listarClientes().subscribe(response => this.clientes = response);
        }, error => {
          this.messageService.add({ severity: 'error', detail: 'Não foi possível deletar o cliente' })
        }
        )
      }
    });


  }

}
