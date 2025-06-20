import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../services/personagem.service';
import { Personagem } from '../../models/personagem.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personagem-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personagem-list.component.html',
  styleUrls: ['./personagem-list.component.css']
})
export class PersonagemListComponent implements OnInit {
  personagens: (Personagem & { mostrarDetalhes?: boolean })[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private personagemService: PersonagemService, private router: Router) {}

  ngOnInit(): void {
    this.carregarPersonagens();
  }

  navigateToCreateCharacter(): void {
    this.router.navigate(['/novo-personagem']);
  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/personagem', id, 'editar']);
  }

  carregarPersonagens(): void {
    this.isLoading = true;
    this.error = null;
    this.personagemService.getPersonagens().subscribe({
      next: (data) => {
        this.personagens = data.map(p => ({ ...p, mostrarDetalhes: false }));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar personagens', err);
        this.error = 'Falha ao buscar os heróis. A taverna pode estar fechada. Tente novamente mais tarde.';
        this.isLoading = false;
      }
    });
  }

  toggleDetalhes(personagem: Personagem & { mostrarDetalhes?: boolean }): void {
    personagem.mostrarDetalhes = !personagem.mostrarDetalhes;
  }
}
