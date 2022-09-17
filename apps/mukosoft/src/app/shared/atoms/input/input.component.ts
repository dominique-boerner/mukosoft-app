import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

export type InputComponentType = "text" | "date" | "number";

@Component({
  selector: "mukosoft-input",
  templateUrl: "./input.component.html",
})
export class InputComponent {
  @Input()
  formControl: FormControl;

  @Input()
  value: any;

  @Input()
  type: InputComponentType = "text";

  @Input()
  labelId: string;

  @Output()
  onIonChange = new EventEmitter<any>();
}
