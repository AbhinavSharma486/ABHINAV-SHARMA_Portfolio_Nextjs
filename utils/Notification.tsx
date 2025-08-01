import { Notyf, NotyfHorizontalPosition, NotyfVerticalPosition } from "notyf";
import "notyf/notyf.min.css";

class Notification {
  private duration: number;
  private notif!: Notyf; // Using definite assignment assertion

  constructor(duration = 3000, x: NotyfHorizontalPosition = "right", y: NotyfVerticalPosition = "top") {
    this.duration = duration;
    if (typeof window !== "undefined") {
      this.notif = new Notyf({
        duration: this.duration,
        position: {
          x: x,
          y: y,
        },
      });
    }
  }

  error(message = "ERROR") {
    this.notif.error({
      message,
      dismissible: true,
    });
  }

  success(message = "SUCCESS") {
    return this.notif.success({
      message,
      dismissible: true,
    });
  }
}

export default Notification;
