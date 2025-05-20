import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendecarroService } from '../vendecarro.service';
import { vendecarro } from '../vendecarro.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})

export class EdicaoComponent implements OnInit {
  vendecarro: vendecarro = {
    id: 0,
    model: '',
    brand: '',
    manufactureYear: 0,
    engine: '',
    horsepower: 0,
  };
  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendecarroService: VendecarroService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarVendecarro();
  }

  carregarVendecarro(): void {
    if (!this.id) {
      //é number

      this.router.navigate(['/listagem']);
      return;
    }

    this.vendecarroService.buscarVendecarro(this.id).subscribe((a) => {
      this.vendecarro = a;
    });
  }

  salvar(): void {
    if (!this.vendecarro) return;

    this.vendecarroService.atualizarVendecarro(this.id, this.vendecarro).subscribe(() => {
      this.router.navigate(['/listagem']);
    });
  }
}