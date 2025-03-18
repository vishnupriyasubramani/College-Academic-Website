import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-progressreport',
  templateUrl: './progressreport.component.html',
  styleUrls: ['./progressreport.component.css']
})
export class ProgressreportComponent {
  semester: string = ''; // Variable to store selected semester

  constructor(private router: Router) {}

  Progressreport() {
    if (!this.semester) {
      console.log("All fields are required.");
      return;
    }

    console.log("Logging in with Semester:", this.semester);

    // Navigate to Student Progress Report
    this.router.navigate(['/semester']);
  }
}

