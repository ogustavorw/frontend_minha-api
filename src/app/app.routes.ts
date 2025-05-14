import { Routes } from '@angular/router';
import { EdicaoComponent } from './vendecarro/edicao/edicao.component';
import { CadastroComponent } from './vendecarro/cadastro/cadastro.component';
import { ListagemComponent } from './vendecarro/listagem/listagem.component';

export const routes: Routes = [
    
    {path: '', redirectTo: 'listagem', pathMatch: 'full'},

    {path: 'listagem', component: ListagemComponent},
    
    {path: 'cadastro', component: CadastroComponent},
    
    {path: 'edicao/:id', component: EdicaoComponent}

];