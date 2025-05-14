import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VendecarroService } from '../vendecarro.service';
import { vendecarro } from '../vendecarro.model';

@Component({
  selector: 'app-listagem',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})

export class ListagemComponent implements OnInit {
  
  vendecarro: vendecarro[] = []

  constructor(private vendecarroService: VendecarroService){

  }
  ngOnInit(): void {
    this.carregarVendecarro()
  }

  carregarVendecarro(): void{
    // este .subscribe serve para esperar a requisição mandar um retorno da requisição HTTP
    this.vendecarroService.listarVendecarro().subscribe((res) => {
      this.vendecarro = res;
    })
  }
}