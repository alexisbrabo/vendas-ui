import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaGeralComponent } from './venda-geral.component';

describe('VendaGeralComponent', () => {
  let component: VendaGeralComponent;
  let fixture: ComponentFixture<VendaGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
