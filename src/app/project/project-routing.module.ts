import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectAlecrimComponent } from './project-alecrim/project-alecrim.component';
import { ProjectForsaittComponent } from './project-forsaitt/project-forsaitt.component';

const routes: Routes = [
  { path: '', redirectTo: 'alecrim' , pathMatch: 'full'},
  { path: 'alecrim', component: ProjectForsaittComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
