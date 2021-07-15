import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Etudiant } from 'src/interfaces/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  private urlEtudiant  : string = "http://localhost:5000/api/etudiant/";

  private existSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  etudiant!: Etudiant;

constructor(private http: HttpClient) {
 }

  get exist():Observable<boolean>{
    return  this.existSubject.asObservable();
  }

//ETUDIANT
  async getEtudiant(numEtudiant: string) {
    return await this.http.get<Etudiant>(`${this.urlEtudiant}/${numEtudiant}`).toPromise();
  }

  findEtudiant(numEtudiant: string){
    this.http.get<Etudiant>(`${this.urlEtudiant}/${numEtudiant}`).subscribe(
      etudiant => {
        this.etudiant = etudiant;
        this.existSubject.next(true);
        return this.etudiant;
      }
    )
  }

  async createEtudiant(etudiant: any) {
    return await this.http.post(`${this.urlEtudiant}/${etudiant.numEtudiant}`, etudiant).toPromise().catch(
      err=>console.log("erreur creation etudiant")
    );
  }

  async updateEtudiant(etudiant: Etudiant) {
    return await this.http.put(`${this.urlEtudiant}/${etudiant.numEtudiant}`, etudiant).toPromise().catch(
      err=>console.log("erreur update etudiant")
    );
  }
}
