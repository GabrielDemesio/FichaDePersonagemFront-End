import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {PersonagemFormComponent} from './components/personagem-form/personagem-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ficha-Personagem';
  constructor(private router: Router) {}

  navigateToCreateCharacter() {
    this.router.navigate(['novo-personagem']);
  }
}
