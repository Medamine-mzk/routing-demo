import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {

    public employes : any;

    constructor(private employesService : EmployesService){}

    ngOnInit(): void {
        this.employesService.getEmployes().subscribe(data=>{
          this.employes=data;
        });
    }
}
