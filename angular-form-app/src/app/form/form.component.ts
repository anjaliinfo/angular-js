import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule],  // Add FormsModule to imports array
})
export class FormComponent {
  user = { name: '', email: '' };  // Initialize form data
  submitted = false;

  onSubmit(form: any): void {
    if (form.valid) {
      this.submitted = true;
    }
  }
}
