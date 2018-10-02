import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';

import { CarouselComponent } from './carousel/carousel.component';
import { HomepageComponent } from './homepage.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ReunioesComponent } from './reunioes/reunioes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomepageRoutingModule,
  ],
  declarations: [
    CarouselComponent, 
    HomepageComponent, 
    AgendaComponent, ReunioesComponent]
})
export class HomepageModule { }
