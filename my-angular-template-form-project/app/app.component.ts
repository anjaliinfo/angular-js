// src/app/app.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [CommonModule, FormsModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "my-angular-form-project";

    countryList: country[] = [
        new country('1', 'India'),
        new country('2', 'USA'),
        new country('3', 'England'),
    ];

    onSubmit(contactForm: NgForm) {
        // Your form submission logic here
        console.log('Form Submitted!', contactForm.value);
    }
}

export class country {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
