import { Component, EventEmitter, Input, Output } from '@angular/core';

export type InputComponentType = 'text' | 'date' | 'number';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input()
  value: any;

  @Input()
  type: InputComponentType = 'text';

  @Input()
  labelId: string;

  @Output()
  onIonChange = new EventEmitter<any>();
}
