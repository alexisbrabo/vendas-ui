import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { VendasService } from '../../services/vendas/vendas.service';

@Component({
  selector: 'app-vendas-listagem',
  templateUrl: './vendas-listagem.component.html',
  styleUrls: ['./vendas-listagem.component.css']
})
export class VendasListagemComponent implements OnInit {

  vendas: Array<any>;
  cols: any[];

  constructor(private vendaService: VendasService, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.listar();

    this.cols = [
      { field: 'id', header: 'Código' },
      { field: 'cliente.nome', header: 'Cliente' },
      { field: 'cadastro', header: 'Data de Cadastro' },
      { field: 'total', header: 'Total' }
    ];
  }

  listar() {
    this.vendaService.listar().subscribe(response => this.vendas = response);
  }

  deletar(venda: any) {

    this.confirmationService.confirm({
      message: 'Você deseja mesmo deletar esta venda?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.vendaService.deletar(venda).subscribe(response => {

          this.messageService.add({ severity: 'success', detail: 'Venda deletada com sucesso' })

          this.listar();
        })
      }
    });


  }

}
