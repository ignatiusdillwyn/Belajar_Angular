import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  empId = '0'
  route = inject(ActivatedRoute);

  ngOnInit() {
    // Cara 1: snapshot (satu kali baca)
    //Get Param from Route
    this.empId = this.route.snapshot.paramMap?.get('id') ?? 'emp id not found';
    console.log('EMP ID: ', this.empId)
   

  }
}
