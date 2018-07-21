import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

import { FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ProdutosService } from '../../services/produtos/produtos.service';

@Component({
  selector: 'app-produto-cadastro-e-listagem',
  templateUrl: './produto-cadastro-e-listagem.component.html',
  styleUrls: ['./produto-cadastro-e-listagem.component.css']
})
export class ProdutoCadastroEListagemComponent implements OnInit {

  produto: any;
  produtos: Array<any>;
  errorMsg;

  constructor(private produtosService: ProdutosService,
     private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.produtosService.listarProdutos().subscribe(response => this.produtos = response);
    this.novoCadastro();
  }

  novoCadastro() {
    this.produto = { nome: '', valor: ''};
  }

  atualizarProduto(produto: any){
    this.produtosService.atualizar(produto).subscribe(response => {
    
      this.messageService.add({ severity: 'info', detail: 'Produto editado com sucesso'});

      this.produtosService.listarProdutos().subscribe(response => this.produtos = response);

    })
  }

  adicionar(frm: FormGroup) {
      this.produtosService.adicionar(this.produto).subscribe(response => {
      frm.reset();

      this.novoCadastro();

      this.messageService.add({ severity: 'success', detail: 'Produto cadastrado com sucesso'})

      this.produtosService.listarProdutos().subscribe(response => this.produtos = response);
    })
  }

  deletar(produto: any) {

    this.confirmationService.confirm({
      message: 'Você deseja mesmo deletar este produto?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.produtosService.deletar(produto).subscribe(response =>{

        this.messageService.add({ severity: 'success', detail: 'Produto deletado com sucesso'})
    
        this.produtosService.listarProdutos().subscribe(response => this.produtos = response);
        }, error => {
          this.messageService.add({ severity: 'error', detail: 'Não foi possível deletar o produto'})}
      )}
    });

    
  }

}
