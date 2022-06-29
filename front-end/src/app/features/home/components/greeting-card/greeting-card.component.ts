import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting-card',
  templateUrl: './greeting-card.component.html',
})
export class GreetingCardComponent {
  @Input()
  name: string;
}
