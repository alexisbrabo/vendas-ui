import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadastroEListagemComponent } from './cliente-cadastro-e-listagem.component';

describe('ClienteCadastroEListagemComponent', () => {
  let component: ClienteCadastroEListagemComponent;
  let fixture: ComponentFixture<ClienteCadastroEListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCadastroEListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCadastroEListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
