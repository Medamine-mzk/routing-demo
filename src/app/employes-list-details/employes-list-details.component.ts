import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';

@Component({
  selector: 'app-employes-list-details',
  templateUrl: './employes-list-details.component.html',
  styleUrls: ['./employes-list-details.component.css']
})
export class EmployesListDetailsComponent implements OnInit {

  public employes : any;

  constructor(private employesService : EmployesService){}

  ngOnInit(): void {
    this.employesService.getEmployes().subscribe(data=>{
      this.employes=data;
    });
}
}
