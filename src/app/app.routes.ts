import { RouterModule, Routes } from '@angular/router';
import { ListEleveComponent } from './admin/eleve/list-eleve/list-eleve.component';
import { ListMatiereComponent } from './admin/matiere/list-matiere/list-matiere.component';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './admin/accueil/accueil.component';
import { AjoutEleveComponent } from './admin/eleve/ajout-eleve/ajout-eleve.component';

export const routes: Routes = [

  { path : '', component:AccueilComponent},

  { path:"listeEleve", component:ListEleveComponent},
  { path:"ajoutEleve", component:AjoutEleveComponent},
  { path:"listeEleve", component:ListEleveComponent},

  { path:"listMatiere", component:ListMatiereComponent},


];


