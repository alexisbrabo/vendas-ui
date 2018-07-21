import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCadastroEListagemComponent } from './produto-cadastro-e-listagem.component';

describe('ProdutoCadastroEListagemComponent', () => {
  let component: ProdutoCadastroEListagemComponent;
  let fixture: ComponentFixture<ProdutoCadastroEListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoCadastroEListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCadastroEListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
