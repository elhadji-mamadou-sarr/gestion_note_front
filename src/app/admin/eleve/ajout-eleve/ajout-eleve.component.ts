import { Component, OnInit } from '@angular/core';
import { Eleve } from '../../../models';
import { EleveService } from '../../../services/eleve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-eleve',
  standalone: true,
  imports: [],
  templateUrl: './ajout-eleve.component.html',
  styleUrl: './ajout-eleve.component.css'
})
export class AjoutEleveComponent implements OnInit{

  constructor(private eleveService: EleveService,private router:Router){}

  newEleve : Eleve = {
    nom: '',
    prenom: '',
    dateN: undefined,
    sexe: '',
    image: null,
  }

  succesMessage ="";
  errorMessage ="";

  ngOnInit(): void {

  }

  ajouterEleve(){
    this.eleveService.addEleve(this.newEleve).subscribe({
      next:()=>{
        this.succesMessage = "Eleve ajouter avec succes"
        this.router.navigate(['/listeEleve'])
      },
      error:(err) =>{
          this.errorMessage="Echec de l'ajout"
      },
    })
  }



}
