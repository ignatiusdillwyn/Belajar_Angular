import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  http = inject(HttpClient)
  constructor() { }

  bookingTicket(data: { scheduleId: number, seatsId: number[], totalTickets: number, totalPrice: number }) {
    return this.http.post(
      `${environment.apiUrl}/api/bookings`,
      {
        scheduleId: data.scheduleId,
        seatIds: data.seatsId,
        totalTickets: data.totalTickets,
        totalPrice: data.totalPrice
      }
    );
  }

  getBookings() {
    return this.http.get(
      `${environment.apiUrl}/api/bookings`,
    )
  }
}
