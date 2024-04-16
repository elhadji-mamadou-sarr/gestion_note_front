import { Component, OnInit } from '@angular/core';
import { Matiere } from '../../../models';
import { MatiereService } from '../../../services/matiere.service';

@Component({
  selector: 'app-list-matiere',
  standalone: true,
  imports: [],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit{

  matieres:Matiere[]=[];

  succesMessage ="";
  errorMessage = "";

  constructor(private matiereService: MatiereService){}

  ngOnInit(): void {
    this.listMatiere();
  }

  listMatiere(){
    this.matiereService.getAllMatieres().subscribe({
      next:(value) =>{
        this.matieres = value;
      },
      error:(err)=>{
        console.log("Erreur ", err);
        this.errorMessage = "Echec du chargement de la liste de matieres"
      }
    })
  }

  supprimerMatiere(id :number){
    this.matiereService.deleteMatiere(id).subscribe({
      next:(value) =>{
        this.succesMessage = "Matiere supprimer avec succes"
      },
      error:(err)=> {
        this.errorMessage = "Echec de la suppression"
        console.log("Erreur ", err);

      },
    })
  }


}
