import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [HomeComponent, Page2Component],
  imports: [CommonModule],
})
export class ComponentsModule {}
