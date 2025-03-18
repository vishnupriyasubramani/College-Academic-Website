import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // ✅ Ensures this service is available throughout the app
})
export class CollegeAcademicService {
  endpoint = 'http://localhost:3000/users/'; // ✅ Ensure correct endpoint

  constructor(private hc: HttpClient) {} // ✅ Inject HttpClient

  // ✅ Add method to send user data to the backend
  studentlogin(user: any) {
    return this.hc.post(this.endpoint, user);
  }
}
