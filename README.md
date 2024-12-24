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


# MyAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
