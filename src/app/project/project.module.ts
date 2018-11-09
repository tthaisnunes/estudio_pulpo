import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';

import { ProjectAlecrimComponent } from './project-alecrim/project-alecrim.component';
import { ProjectOperacoesSemDorComponent } from './project-operacoes-sem-dor/project-operacoes-sem-dor.component';
import { ProjectForsaittComponent } from './project-forsaitt/project-forsaitt.component';
import { ProjectMoriComponent } from './project-mori/project-mori.component';

import { BannerComponent } from './common/banner/banner.component';
import { DescriptionComponent } from './common/description/description.component';
import { ImageFluidComponent } from './common/image-fluid/image-fluid.component';
import { ImageLeftComponent } from './common/image-left/image-left.component';
import { ImageRightComponent } from './common/image-right/image-right.component';
import { SeeMoreComponent } from './common/see-more/see-more.component';

@NgModule({
  declarations: [
    ProjectAlecrimComponent,
    ProjectOperacoesSemDorComponent,
    ProjectForsaittComponent,
    ProjectMoriComponent,
    BannerComponent,
    DescriptionComponent,
    ImageFluidComponent,
    ImageLeftComponent,
    ImageRightComponent,
    SeeMoreComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})

export class ProjectModule { }
