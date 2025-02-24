# AngularBasicSetup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

To run this project use  ng serve -o --port 4209

https://freeapi.miniprojectideas.com/index.html

## Create new Project
1) ng new Angular_Basic_Project

## Add BootStrap and entry in angular.json
2) npm install bootstrap
3) add css  bootstrap entry in angular.json
3a)  "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"]

## Add Environments
4) In app folder create environments command is ng g environments


## Add guards
5) Add "@schematics/angular:guard": { "implements": ["CanActivate"] } inside schematics{} in angular.json

"schematics": {
        "@schematics/angular:guard": { "implements": ["CanActivate"] }
      },

5a) command is:-  ng g guard auth



## Add Routes into file app.routes.ts

  //Regular Load Component
   { 
      path:'built-in-pipes',
      component: BuiltInPipesExampleComponent
   },

 //Lazy load a Module 
   {
      path:'admin',
      loadChildren:()=> import('./admin/admin.module').then(m => m.AdminModule)
   }

in the html add <router-outlet></router-outlet>

## Add Module
command to create module is ng g module <moduleName>








## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
