import { Component, Input } from '@angular/core';

@Component({
  selector: 'mukosoft-label',
  templateUrl: './label.component.html',
})
export class LabelComponent {
  @Input()
  labelId: string;
}
