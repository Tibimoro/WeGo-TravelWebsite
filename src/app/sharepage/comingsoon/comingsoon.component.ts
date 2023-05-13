import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css'],
})
export class ComingsoonComponent implements OnInit, OnDestroy {
  seconds!: string;
  minutes!: string;
  hours!: string;
  days!: string;

  private timeFunction: any;
  private secValue = 11;
  private minValue = 2;
  private hourValue = 2;
  private dayValue = 9;

  ngOnInit() {
    this.timeFunction = setInterval(() => {
      this.secValue--;

      if (this.secValue === 0) {
        this.minValue--;
        this.secValue = 60;
      }
      if (this.minValue === 0) {
        this.hourValue--;
        this.minValue = 60;
      }
      if (this.hourValue === 0) {
        this.dayValue--;
        this.hourValue = 24;
      }

      this.seconds =
        this.secValue < 10 ? `0${this.secValue}` : this.secValue.toString();
      this.minutes =
        this.minValue < 10 ? `0${this.minValue}` : this.minValue.toString();
      this.hours =
        this.hourValue < 10 ? `0${this.hourValue}` : this.hourValue.toString();
      this.days =
        this.dayValue < 10 ? `0${this.dayValue}` : this.dayValue.toString();

      if (this.dayValue === 0) {
        this.ngOnDestroy();
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timeFunction);
  }
}
