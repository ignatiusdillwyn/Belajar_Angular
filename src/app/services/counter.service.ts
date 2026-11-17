import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private count:number = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  getCount(): number {
    return this.count;
  }
}
