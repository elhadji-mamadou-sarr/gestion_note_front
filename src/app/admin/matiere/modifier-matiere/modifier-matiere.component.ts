import { Component, OnInit } from '@angular/core';
import { Matiere } from '../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { MatiereService } from '../../../services/matiere.service';

@Component({
  selector: 'app-modifier-matiere',
  standalone: true,
  imports: [],
  templateUrl: './modifier-matiere.component.html',
  styleUrl: './modifier-matiere.component.css'
})
export class ModifierMatiereComponent implements OnInit{

  constructor(private matiereService: MatiereService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  matiere:Matiere={
    nom: '',
    coef: 0
  }

  id_Matiere!:number;

  succesMessage ="";
  errorMessage ="";

  ngOnInit(): void {
    this.id_Matiere = this.route.snapshot.params['id'];
    this.getMatiere(this.id_Matiere);
  }

  getMatiere(id: number){
    this.matiereService.getMatiereById(id).subscribe({
      next:(value) =>{
        this.matiere=value
      },
    })
  }

  modifierMatiere(){
    this.matiereService.updateMatiere(this.id_Matiere).subscribe({
      next:() =>{
        this.succesMessage = "Matiere modifier avec succes";
      },
      error:(err) => {
        this.errorMessage = "Echec de la modification"
        console.log("Erreur ",err);
      },
    })
  }


}
