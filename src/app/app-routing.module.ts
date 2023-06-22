import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartementDetailsComponent } from './departement-details/departement-details.component';
import { EmployesListDetailsComponent } from './employes-list-details/employes-list-details.component';

const routes: Routes = [
  { path:'',redirectTo:'/departements',pathMatch:'full'},
  { path:'departements',component:DepartementListComponent },
  { path:'departement/:id',component:DepartementDetailsComponent},
  { path:'employes',component:EmployesListComponent },
  { path:'employesDetails',component:EmployesListDetailsComponent },
  { path:'**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const listComponents=[DepartementListComponent,
                             EmployesListComponent,
                             PageNotFoundComponent,
                             DepartementDetailsComponent,
                             EmployesListDetailsComponent
                            ]

