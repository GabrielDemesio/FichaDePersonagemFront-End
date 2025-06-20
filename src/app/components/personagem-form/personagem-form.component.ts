import { Component, OnInit } from '@angular/core';
import { Personagem } from '../../models/personagem.model';
import { PersonagemService } from '../../services/personagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personagem-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personagem-form.component.html',
  styleUrls: ['./personagem-form.component.css']
})
export class PersonagemFormComponent implements OnInit {

  personagem: Personagem = {
    carisma: 0, destreza: 0, energia: 0, experiencia: 0,
    forca: 0, id: 0, inteligencia: 0, mana: 0,
    nivel: 1, raca: '', vida: 0, nome: '', classe: ''
  };

  public isEditMode = false;
  private personagemId: number | null = null;
  public pageTitle = 'Forjar Novo Personagem';

  public creationSuccess = false;
  public successMessage: string | null = null;
  public errorMessage: string | null = null;
  public isGerandoHistoria = false;

  constructor(
    private personagemService: PersonagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.personagemId = +id;
        this.pageTitle = 'Editar Herói';
        this.loadPersonagemData(this.personagemId);
      }
    });
  }

  loadPersonagemData(id: number): void {
    this.personagemService.getPersonagem(id).subscribe({
      next: (data) => {
        this.personagem = data;
      },
      error: (err) => {
        this.errorMessage = 'Não foi possível carregar os dados do herói.';
        console.error(err);
      }
    });
  }

  onSubmit() {
    if (this.isEditMode && this.personagemId) {
      this.personagemService.updatePersonagem(this.personagemId, this.personagem).subscribe({
        next: () => {
          alert('Personagem atualizado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = 'Falha ao atualizar o herói.';
          console.error(err);
        }
      });
    } else {
      this.personagemService.createPersonagem(this.personagem).subscribe({
        next: (response) => {
          this.successMessage = `Personagem "${response.nome}" foi forjado na batalha!`;
          this.creationSuccess = true;
        },
        error: (error) => {
          this.errorMessage = 'Ocorreu um erro ao forjar o personagem.';
          this.successMessage = null;
        }
      });
    }
  }

  gerarHistoria(): void {
    if (!this.personagem.nome || !this.personagem.raca || !this.personagem.classe) {
      alert('Por favor, preencha Nome, Raça e Classe antes de gerar a história.');
      return;
    }

    this.isGerandoHistoria = true;
    this.errorMessage = null;

    const dadosParaHistoria = {
      nome: this.personagem.nome,
      raca: this.personagem.raca,
      classe: this.personagem.classe
    };

    this.personagemService.gerarHistoria(dadosParaHistoria).subscribe({
      next: (response) => {
        this.personagem.historia = response.historia;
        this.isGerandoHistoria = false;
      },
      error: (err) => {
        console.error('Erro ao gerar história:', err);
        this.errorMessage = 'O Oráculo da IA está indisponível. Tente novamente mais tarde.';
        this.isGerandoHistoria = false;
      }
    });
  }

  criarNovo(): void {
    this.creationSuccess = false;
    this.router.navigate(['/novo-personagem']);
    this.personagem = {
      carisma: 0, destreza: 0, energia: 0, experiencia: 0,
      forca: 0, id: 0, inteligencia: 0, mana: 0,
      nivel: 1, raca: '', vida: 0, nome: '', classe: ''
    };
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
