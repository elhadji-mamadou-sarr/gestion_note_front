import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../../services/eleve.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { Eleve } from '../../../models';

@Component({
  selector: 'app-modifier-eleve',
  standalone: true,
  imports: [],
  templateUrl: './modifier-eleve.component.html',
  styleUrl: './modifier-eleve.component.css'
})
export class ModifierEleveComponent implements OnInit{

  constructor(private eleveService: EleveService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  eleve:Eleve={
    nom: '',
    prenom: '',
    dateN: undefined,
    sexe: '',
    image : null
  }

  id_eleve!:number;

  succesMessage ="";
  errorMessage ="";

  ngOnInit(): void {
    this.id_eleve = this.route.snapshot.params['id'];
    this.getEleve(this.id_eleve);
  }

  getEleve(id: number){
    this.eleveService.getEleveById(id).subscribe({
      next:(value) =>{
        this.eleve=value
      },
    })
  }

  modifierEleve(){
    this.eleveService.updateEleve(this.id_eleve).subscribe({
      next:() =>{
        this.succesMessage = "Eleve modifier avec succes";
      },
      error:(err) => {
        this.errorMessage = "Echec de la modification"
        console.log("Erreur ",err);
      },
    })
  }


}
