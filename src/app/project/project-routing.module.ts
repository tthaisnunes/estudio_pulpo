import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectAlecrimComponent } from './project-alecrim/project-alecrim.component';
import { ProjectOperacoesSemDorComponent } from './project-operacoes-sem-dor/project-operacoes-sem-dor.component';
import { ProjectForsaittComponent } from './project-forsaitt/project-forsaitt.component';
import { ProjectMoriComponent } from './project-mori/project-mori.component';
import { ProjectsGridComponent } from './projects-grid/projects-grid.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsGridComponent
  },
  {
    path: 'alecrim',
    component: ProjectAlecrimComponent
  },
  {
    path: '4-operacoes-sem-dor',
    component: ProjectOperacoesSemDorComponent
  },
  {
    path: 'forsaitt',
    component: ProjectForsaittComponent
  },
  {
    path: 'mori',
    component: ProjectMoriComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
