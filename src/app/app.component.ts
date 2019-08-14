import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  millisecond = '000';
  second = '00';
  minute = '00';
  timer: any = null;

  startTimer() {
    let innerSecond = 0;
    let innerMinute = 0;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      const d = new Date();
      this.millisecond = d.getMilliseconds().toString().padStart(3, '0');
      if (this.millisecond >= '991') {
        if (this.second === '59') {
          innerSecond = 0;
          this.second = '00';
        } else {
          this.second = (++innerSecond).toString().padStart(2, '0');
        }
      }
      if (this.second === '00' && this.millisecond >= '991') {
        this.minute = (++innerMinute).toString().padStart(2, '0');
      }
    }, 10);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.stopTimer();
    this.millisecond = '000';
    this.second = '00';
    this.minute = '00';
  }
}
