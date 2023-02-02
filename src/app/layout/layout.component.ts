import { Component, Input } from '@angular/core';
import { NombresService } from './nombres.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  array: string[] = [];

  constructor(private nombres: NombresService) {
    this.array = nombres.getNombres();
  }

  @Input() nombre?: string = 'Mundo';

  counter: number = 0;

  handleAdd() {
    this.counter += 1;
  }

  handleSub() {
    if (this.counter !== 0) {
      this.counter -= 1;
    }
  }
}
