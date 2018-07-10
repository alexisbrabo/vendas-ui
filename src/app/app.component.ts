import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema de Vendas';
  items: MenuItem[];
  ngOnInit() {
    this.items = [
        {
            label: 'Cadastros',
            items: [
                {label: 'Clientes', routerLink: '/clientes'},
                {label: 'Produtos', routerLink: '/produtos'},
                {label: 'Vendas', routerLink: '/vendas'}
            ]
        }
    ];
}
}