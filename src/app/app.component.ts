import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEleveComponent } from './admin/eleve/list-eleve/list-eleve.component';
import { AccueilComponent } from './admin/accueil/accueil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListEleveComponent, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionNote_front';
}
