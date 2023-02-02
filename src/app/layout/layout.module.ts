import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NombresService } from './nombres.service';
import { HomeComponent } from '../components/home/home.component';
import { Page2Component } from '../components/page2/page2.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule],
  exports: [LayoutComponent],
  providers: [NombresService],
})
export class LayoutModule {}
