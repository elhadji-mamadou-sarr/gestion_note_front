import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Matiere } from '../../../models';
import { MatiereService } from '../../../services/matiere.service';
import { AccueilComponent } from '../../accueil/accueil.component';
import { NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-list-matiere',
  standalone: true,
  imports: [NgFor, AccueilComponent, FormsModule, NgIf],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit{

  @ViewChild('addDialog') addDialog!: TemplateRef<any>;

  matieres:Matiere[]=[];

  succesMessage ="";
  errorMessage = "";

  newMatiere:Matiere={
    id : 0,
    nom : "",
    coef : 0,
  }

  selectedMatiere : Matiere | null = null

  constructor(private matiereService: MatiereService, private dialog : MatDialog){}

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

  openAddDialog(matiere : Matiere | null){
    if (matiere != null) {
      this.newMatiere = matiere
    }
    this.selectedMatiere = matiere

    const dialogRef = this.dialog.open(this.addDialog);
    dialogRef.afterClosed().subscribe(() => {
      this.selectedMatiere = null
    })
  }

  saveMatiere(): void{
    if (this.selectedMatiere != null) {

        this.matiereService.updateMatiere(this.selectedMatiere).subscribe({
          next:() => {
            this.succesMessage = 'La matiere mis à jour avec succès';
            this.closeDialog();
          },
          error: (err) => {
            this.errorMessage = 'Échec de la mise à jour de la matiere';
            console.error('Erreur :', err);
          }
        });

    } else {
      this.matiereService.addMatiere(this.newMatiere).subscribe({
        next:() => {
          this.succesMessage = 'Matiere ajouter avec succès';
          this.closeDialog();
        },
        error: (err) => {
          this.errorMessage = 'Échec de l\'ajout de la matiere';
          console.error('Erreur :', err);
        }
      });

    }

  }


  deleteMatiere(id :number){
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


  closeDialog(): void {
    this.dialog.closeAll();
  }


}
