import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EleveService } from '../../../services/eleve.service';
import { Eleve } from '../../../models';
import { AccueilComponent } from '../../accueil/accueil.component';
import { NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-list-eleve',
  standalone: true,
  imports: [NgFor, AccueilComponent, FormsModule, NgIf],
  templateUrl: './list-eleve.component.html',
  styleUrl: './list-eleve.component.css'
})
export class ListEleveComponent implements OnInit{

  @ViewChild('addDialog') addDialog!: TemplateRef<any>;

  constructor(private eleveService : EleveService, private dialog : MatDialog){}

  eleves : Eleve[]=[];
  succesMessage ="";
  errorMessage ="";

  newEleve : Eleve = {
    nom: '',
    prenom: '',
    dateN: undefined,
    sexe: '',
    image: null,
  }

  selectedEleve: Eleve | null = null;

  ngOnInit(): void {
    this.listEleve();
  }


  openAddDialog(eleve: Eleve | null): void {
    this.selectedEleve = eleve;
    const dialogRef = this.dialog.open(this.addDialog);

    dialogRef.afterClosed().subscribe(() => {
      this.selectedEleve = null; // Réinitialiser une fois fermé
      this.listEleve();
    });
  }

  listEleve(){
    this.eleveService.getAllEleve().subscribe({
      next:(value)=> {
        this.eleves= value;
      },
      error:(err) =>{
        this.errorMessage= "Echec du chargement de la liste des eleves";
        console.log("Erreur ", err );

      },
    })
  }


  ajouterEleve(){
    this.eleveService.addEleve(this.newEleve).subscribe({
      next:()=>{
        this.succesMessage = "Eleve ajouter avec succes"
      },
      error:(err) =>{
          this.errorMessage="Echec de l'ajout"
      },
    })
  }


  saveEleve(): void {
    if (this.selectedEleve) {
      this.eleveService.updateEleve(this.selectedEleve.id!).subscribe({
        next: () => {
          this.succesMessage = 'Élève mis à jour avec succès';
          this.closeDialog();
        },
        error: (err) => {
          this.errorMessage = 'Échec de la mise à jour de l\'élève';
          console.error('Erreur :', err);
        }
      });
    } else {
     this.ajouterEleve()
    }
  }
  closeDialog(): void {
    this.dialog.closeAll();
  }


  deleteEleve(id: number): void {
    this.eleveService.deleteEleve(id).subscribe({
      next: (response) => {
        this.listEleve();
        this.succesMessage = response.error.text;
      },
      error: (err) => {
        this.errorMessage = err.message;
        console.error('Erreur :', err);
      }
    });
  }





}
