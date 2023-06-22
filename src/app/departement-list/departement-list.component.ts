import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent {

  departements = [
    {id : 1, nom : 'Technologie de l\'informatique'},
    {id : 2, nom : 'Electrique'},
    {id : 3, nom : 'Mécanique'},
    {id : 4, nom : 'Gestion'}
  ];
  constructor(private _router:Router){ }

  onSelectDep(departement : any){
    this._router.navigate(['/departement',departement.id])
  }
}
