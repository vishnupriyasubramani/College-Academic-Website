import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  userObj: { id: string; email: string; password: string } = {
    id: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}  // Inject Router

  studentLogin() {
    console.log("Logging in:", this.userObj);
  
    // Ensure all fields are filled
    if (!this.userObj.id || !this.userObj.email || !this.userObj.password) {
      console.log("All fields are required.");
      return;
    }

    // Navigate to StudentProgressReport
    this.router.navigate(['/Progressreport']);
  }
}
