import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

@Component({
  selector: 'app-root',
  standalone: true,   // App component also made standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [GreetingComponent]  // Import GreetingComponent in the app component
})

export class AppComponent {
  title = 'my-angular-app';
}
