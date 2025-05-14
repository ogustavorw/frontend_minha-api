import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { vendecarro } from '../vendecarro.model';
import { VendecarroService } from '../vendecarro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  vendecarro: vendecarro = {
    manufactureYear: 0,
    horsepower: 0,
    model: '',
    brand: '',
    engine: '',
  };

  constructor(
    private vendecarroService: VendecarroService,
    private router: Router
  ) {}

  salvar() {
    this.vendecarroService.cadastrarVendecarro(this.vendecarro).subscribe(() => {
      this.router.navigate(['/listagem'])
    })
  }

}
