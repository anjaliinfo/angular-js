import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  // Get form controls for easy access
  get f() {
    return this.userForm.controls;
  }

  // Form submission handler
  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    // Output the form data
    alert('Form submitted successfully!\n' + JSON.stringify(this.userForm.value, null, 2));
  }
}


