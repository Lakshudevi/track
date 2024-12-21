import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tracker',
  standalone: false,
  
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {
   title = 'track';
    user = { amount: '', date: '',description:'' }; // Model to store form data
    submitted = false;
  
    constructor(private http: HttpClient) {}
  
    onSubmit(form: any) {
      if (form.valid) {
        // Make POST request to backend API
        this.http.post('http://localhost:3000/api/expenses', this.user).subscribe({
          next: (response) => {
            console.log('Data submitted successfully:', response);
            this.submitted = true;
            form.resetForm(); // Reset form after submission
          },
          error: (error) => console.error('Error submitting data:', error),
        });
      }
    }
  }
  
