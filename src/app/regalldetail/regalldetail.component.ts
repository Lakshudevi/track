import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';


@Component({
  selector: 'app-regalldetail',
  standalone: false,
  
  templateUrl: './regalldetail.component.html',
  styleUrl: './regalldetail.component.css'
})
export class RegalldetailComponent {
 users: any = []; // Holds the fetched expense data

      constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadExpenses();
  }
  loadExpenses(): void {
    this.http.get('http://localhost:3000/api/regs').subscribe({
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
    this.http.delete('http://localhost:3000/api/regs/' + this.users[index]._id).subscribe({
      next: (response) => {
        console.log('Data submitted successfully:', response);
        this.users =response;
      },
      error: (error) => console.error('Error submitting data:', error),
    });
    this.users.splice(index, 1);
  }

}
