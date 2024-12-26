import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-overall',
  standalone: false,
  
  templateUrl: './overall.component.html',
  styleUrl: './overall.component.css'
})
export class OverallComponent {
  users: any = []; // Holds the fetched expense data

      constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadExpenses();
  }
  loadExpenses(): void {
    this.http.get('https://29tracks.netlify.app/api/expenses').subscribe({
      next: (response) => {
        console.log('Data submitted successfully:', response);
        this.users =response;

      },
      error: (error) => console.error('Error submitting data:', error),
    });
  }

  editUser(index: number) {
    alert(`Editing user: ${this.users[index]._id}`);
  }

  deleteUser(index: number) {
    alert(`Delete user: ${this.users[index]._id}`);
    this.http.delete('https://29tracks.netlify.app/api/expenses/'+ this.users[index]._id ).subscribe({
      next: (response) => {
        console.log('Data submitted successfully:', response);
        this.users =response;

      },
      error: (error) => console.error('Error submitting data:', error),
    });
    this.users.splice(index, 1);

  }

}
