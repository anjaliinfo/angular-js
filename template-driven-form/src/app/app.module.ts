import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  // Declare the AppComponent
  ],
  imports: [
    BrowserModule,  // Include BrowserModule for basic app functionality
    ReactiveFormsModule // Add ReactiveFormsModule for form handling
  ],
  providers: [],
  bootstrap: [AppComponent]  // Specify the root component
})
export class AppModule { }
