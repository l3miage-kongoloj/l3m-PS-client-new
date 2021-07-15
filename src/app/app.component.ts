
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
  inscritEn! : string;

  etudiant$! : Promise<Etudiant>;

  clickCreateEtudiant = false ;

  constructor(private allService: AllService){

  }

  ngOnInit(){

  }

  async createEtudiant(etudiant: any) {
    alert(JSON.stringify(etudiant))
    //await this.allService.createEtudiant(etudiant);
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
