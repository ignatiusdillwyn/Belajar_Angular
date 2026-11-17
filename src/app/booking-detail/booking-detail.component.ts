import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../services/booking/booking.service';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './booking-detail.component.html',
  styleUrl: './booking-detail.component.css'
})
export class BookingDetailComponent {
  fb = inject(FormBuilder)
  bookingSvc = inject(BookingService)

  bookingForm = this.fb.group({
    scheduleId: [0, [Validators.required]],
    seatsId: [0, [Validators.required]],
    totalTickets: [0, [Validators.required]],
    totalPrice: [0, [Validators.required]]
  })

  submitForm() {
    const formValue = this.bookingForm.value
    console.log(formValue)
    this.bookingSvc.bookingTicket({
      scheduleId: formValue.scheduleId ?? 0,
      seatsId: [formValue.seatsId ?? 0],
      totalTickets: formValue.totalTickets ?? 0,
      totalPrice: formValue.totalPrice ?? 0
    }).subscribe(
      response => {
        console.log(response, 'response')
      }
    )
  }
}
