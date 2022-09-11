import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  position: "top" | "bottom" | "middle" = "top";
  duration = 2000;

  constructor(private readonly toastController: ToastController) {}

  async showSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message,
      icon: "information-circle",
      color: "success",
      duration: this.duration,
      position: this.position,
    });

    await toast.present();
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      icon: "information-circle",
      color: "danger",
      duration: this.duration,
      position: this.position,
    });

    await toast.present();
  }
}
