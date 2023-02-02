import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NombresService } from './nombres.service';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule],
  exports: [LayoutComponent],
  providers: [NombresService],
})
export class LayoutModule {}
