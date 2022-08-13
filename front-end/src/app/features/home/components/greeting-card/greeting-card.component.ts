import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-greeting-card',
  templateUrl: './greeting-card.component.html',
})
export class GreetingCardComponent {
  @Input()
  name: Observable<string>;

  @Input()
  profileImage: Observable<string>;

  @Output()
  onAvatarClick = new EventEmitter<void>();
}
