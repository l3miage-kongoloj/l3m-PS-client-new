
import { Component } from '@angular/core';
import { Etudiant } from 'src/interfaces/Etudiant';
import { AllService } from 'src/service/all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent {

  nomEtudiant!: string;
  prenomEtudiant! :string;
  numEtudiant! : string;
  numPortable! : string;
  adE! : string;
  inscritEn! : string;
  affE! :string;
  mailE! :string;
  CAMEt! : string

  etudiant$! : Promise<Etudiant>;

  clickCreateEtudiant = false ;

  constructor(private allService: AllService){

  }

  ngOnInit(){

  }

  async createEtudiant() {

    let etudiant : Etudiant ={
      "numEtudiant": this.numEtudiant,
      "nom":this.nomEtudiant,
     "prenom": this.prenomEtudiant,
      "adresse" : this.adE,
      "numPortable": this.numPortable,
      "assurance": this.CAMEt,
      "typeAffil" : this.affE,
     "mail" : this.mailE

    }
    alert(JSON.stringify(etudiant))
    await this.allService.createEtudiant(etudiant);
  }

  get etudiant() {
    return this.allService.etudiant;
  }

  upperCaseEveryWord(mot: string): string {
    const words = mot.toLowerCase().split(" ");
    return words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
  }

}
