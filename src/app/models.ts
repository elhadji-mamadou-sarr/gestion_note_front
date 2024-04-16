
export interface Eleve{
  id? : number | null,
  nom : string | null,
  prenom : string | null,
  dateN : Date | undefined,
  sexe : string | null,
  image? : File | string | null | undefined,
}


export interface Matiere{
  id?: number;
  nom : string,
  coef : number,
}

export interface Note{
  id? : number,
  note_1 : number,
  note_2 : number,
  integration : number,
  moyenne : number,
  moyX : number,
  eleve : Eleve,
  matiere : Matiere,
}


export interface Bulletin{
  notes : Note[],
  sommeCoef : number,
  sommeMoyenne: number,
  moyenneGeneral: number,
}
