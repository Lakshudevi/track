import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user={}
  name: string='';
  phonenumber: string='';
  password: string='';
  submitted = false;
      constructor(private http: HttpClient) {}
  
  onSubmit(form:any) {
    this.user={
      name:this.name,phonenumber:this.phonenumber,password:this.password    };
    console.log('Registration form submitted!');
    console.log('Name:',this.name);
    console.log('Phonenumber:' ,this.phonenumber);
    console.log('Password:',this.password);
    if (form.valid) {
      // Make POST request to backend API
      this.http.post('https://track-c7wm.onrender.com/api/regs', this.user).subscribe({
        next: (response) => {
          console.log('Data submitted successfully:', response);
          this.submitted = true;
          form.resetForm(); // Reset form after submission
          alert('register successfully')
        },
        error: (error) => console.error('Error submitting data:', error),
      });
    }
  }
}
