import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { Grafica1ComponentComponent } from '../grafica1-component/grafica1-component.component';
import { ProgessComponent } from './progess/progess.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgessComponent,
    Grafica1ComponentComponent,
    PagesComponent

  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Grafica1ComponentComponent,
    PagesComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,  
    RouterModule
  ]
})
export class PagesModule { }
