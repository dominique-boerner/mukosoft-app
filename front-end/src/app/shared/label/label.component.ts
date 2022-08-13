import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
})
export class LabelComponent {
  @Input()
  labelId: string;
}
