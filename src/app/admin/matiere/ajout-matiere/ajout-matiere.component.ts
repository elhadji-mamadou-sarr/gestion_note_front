import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../../../services/matiere.service';
import { Matiere } from '../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-matiere',
  standalone: true,
  imports: [],
  templateUrl: './ajout-matiere.component.html',
  styleUrl: './ajout-matiere.component.css'
})
export class AjoutMatiereComponent implements OnInit{

  constructor(private matiereService: MatiereService, private router:Router){}

  newMatiere : Matiere = {
    nom: '',
    coef: 0
  }

  succesMessage ="";
  errorMessage ="";

  ngOnInit(): void {

  }

  ajouterMatiere(){
    this.matiereService.addMatiere(this.newMatiere).subscribe({
      next:()=>{
        this.succesMessage = "Matiere ajouter avec succes"
        this.router.navigate(['/listMatiere']);
      },
      error:(err) =>{
          this.errorMessage="Echec de l'ajout"
      },
    })
  }

}
