# Step 1: Install Angular CLI
    npm install -g @angular/cli
    
# Step 2: Create a New Angular Project
    ng new my-angular-app

# Step 3: Navigate to the Project Directory
       cd my-angular-app 

   ![image](https://github.com/user-attachments/assets/5b98f7f7-e738-4012-b446-07b9a9cb1798)

   
# Step 4: Start the Application
      ng serve

 ![image](https://github.com/user-attachments/assets/4e5b037a-24ca-46f5-b259-92d36b04915b)

 # Open your browser and navigate to http://localhost:4200/. You should see the default Angular welcome page! 

 ![image](https://github.com/user-attachments/assets/3ab16a71-d1b7-427c-9bda-fab348b7ff92) 

 # Step 5: Modify the Default Component
   Open the src/app/app.component.html file. This file is responsible for rendering the content on the page and modify content to display the custom message.

# Step 6: Add a New Component
    Run the following command to generate the greeting component:
    ng generate component greeting
    ![image](https://github.com/user-attachments/assets/314a124a-318a-4615-9d91-1234fd8f1803)

# Now, open the src/app/greeting/greeting.component.html file and add some content: 
    <h2>Greetings from the Angular App!</h2>
    <p>Have a great day!</p>

# Next, open the src/app/app.component.html file and include the greeting component by adding its selector (found in greeting.component.ts):
  <app-greeting></app-greeting>
  
# Step 7: View the Changes
   Once you've made these changes, your Angular app should automatically reload in the browser. If not, just refresh the page at http://localhost:4200/, and you should see:
  ![image](https://github.com/user-attachments/assets/d23445d8-b282-4633-9631-0f9c4c9e774b)


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Create basic from component 

  # Step 1: Create a New Angular Project, navigate to the newly created project directory:
      ng new angular-form-app
      cd angular-form-app


  # Step 2: Create a New Component for the Form
     ng generate component form

  # Step 3: Update the Form Component 
    Open the src/app/form/form.component.html file and replace its contents with the following HTML to create a simple form:
           <h2>Simple Form in Angular</h2>

            <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)" novalidate>
              <div>
                <label for="name">Name:</label>
                <input type="text" id="name" required [(ngModel)]="user.name" name="name" #name="ngModel">
                <div *ngIf="name.invalid && name.touched" class="error">Name is required!</div>
              </div>
            
              <div>
                <label for="email">Email:</label>
                <input type="email" id="email" required [(ngModel)]="user.email" name="email" #email="ngModel">
                <div *ngIf="email.invalid && email.touched" class="error">Valid email is required!</div>
              </div>
            
              <button type="submit" [disabled]="userForm.invalid">Submit</button>
            </form>
            
            <div *ngIf="submitted">
              <h3>Submitted Data:</h3>
              <p><strong>Name:</strong> {{ user.name }}</p>
              <p><strong>Email:</strong> {{ user.email }}</p>
            </div>

        Explanation of the Code:
            ngForm: This directive creates a local template variable (userForm) to handle form state.
            ngModel: It binds form controls to properties in the component (user.name and user.email).
            ngSubmit: This event is triggered when the form is submitted, and it calls the onSubmit() method in the component.
            Validation: Using the required attribute, we ensure that the fields must be filled in. We also display error messages using *ngIf if the user leaves a field invalid or untouched.

# Step 4: Update the Form Component Logic

   Now, open the src/app/form/form.component.ts file and update the component class like this:

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

# Step 5: Add the Form Component to the Application
      <app-form></app-form>
      
# Step 6: Add Basic Styling 
    Open the src/app/form/form.component.css to add css 

# Update AppComponent to Use Standalone Components
    import { Component } from '@angular/core';
    import { FormComponent } from './form/form.component';  // Import the FormComponent

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      standalone: true,  // Mark app component as standalone
      imports: [FormComponent],  // Import FormComponent here
    })
    export class AppComponent {
      title = 'angular-form-app';
    }

# Start the application
   ng serve
   
![image](https://github.com/user-attachments/assets/24241a9e-7cd2-4df4-b761-61a2d0095158)











Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
