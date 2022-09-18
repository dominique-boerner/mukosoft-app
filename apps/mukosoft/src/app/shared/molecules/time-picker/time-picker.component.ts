import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PickerColumnOption, PickerController } from "@ionic/angular";

@Component({
  selector: "mukosoft-time-picker",
  templateUrl: "./time-picker.component.html",
})
export class TimePickerComponent {
  @Input()
  label: string;

  @Output()
  onConfirm = new EventEmitter<Date>();

  constructor(private pickerController: PickerController) {}

  confirm(hour: number, minute: number) {
    const time = new Date();
    time.setHours(hour, minute, 0, 0);
    this.onConfirm.emit(time);
  }

  public async openPicker() {
    const picker = await this.pickerController.create(
      this.generateTimePicker()
    );

    await picker.present();
  }

  private generateTimePicker() {
    return {
      columns: [
        {
          name: "hour",
          options: this.populatePickerHourColumns(),
        },
        {
          name: "divider",
          options: [
            {
              value: ":",
              text: ":",
            },
          ],
        },
        {
          columnWidth: "50%",
          name: "minute",
          options: this.populatePickerMinuteColumn(),
        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
        },
        {
          text: "Bestätigen",
          handler: (value: any) => {
            this.confirm(value.hour.value, value.minute.value);
          },
        },
      ],
    };
  }

  private populatePickerHourColumns(): PickerColumnOption[] {
    let hourColumn: PickerColumnOption[] = [];
    let i = 1;
    while (i <= 23) {
      const text: string = String(i).padStart(2, "0");
      hourColumn = [...hourColumn, { text, value: i }];
      i++;
    }
    return hourColumn;
  }

  private populatePickerMinuteColumn(): PickerColumnOption[] {
    let minuteColumn: PickerColumnOption[] = [];
    let i = 0;
    while (i <= 59) {
      const text: string = String(i).padStart(2, "0");
      minuteColumn = [...minuteColumn, { text, value: i }];
      i++;
    }
    return minuteColumn;
  }
}
