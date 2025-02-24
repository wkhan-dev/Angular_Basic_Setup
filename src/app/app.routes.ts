import { Routes } from '@angular/router';
import { BuiltInPipesExampleComponent } from './shared/pipes/built-in-pipes-example/built-in-pipes-example.component';
import { ClientComponent } from './pages/client/client.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientProjectComponent } from './pages/client-project/client-project.component';
import { authGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './pages/layout/layout.component';
import { DesignationComponent } from './pages/api-Integration/designation/designation.component';
import { RoleComponent } from './pages/api-Integration/role/role.component';
import { SignalComponent } from './pages/signal/signal.component';
import { StructuralComponent } from './shared/directives/structural/structural.component';
import { TwoWayDataBindingComponent } from './pages/data-Binding/two-Way-Data-Binding/two-way-data-binding.component';
import { AttributeComponent } from './shared/directives/attribute/attribute.component';
import { EventBindingComponent } from './pages/data-Binding/one-Way-Data-Binding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './pages/data-Binding/one-Way-Data-Binding/property-binding/property-binding.component';
import { InterpolationComponent } from './pages/data-Binding/one-Way-Data-Binding/interpolation/interpolation.component';
import { FilterUsersComponent } from './pages/filter-users/filter-users.component';

export const routes: Routes = [

  /*  //Lazy load a Module 
   {
      path:'admin',
      loadChildren:()=> import('./admin/admin.module').then(m => m.AdminModule)
   } */

   /*  //Lazy Load Component (inspect Network search chunk)
    { 
        path:'admin',
        loadComponent:()=> import('./admin/add-user/add-user.component').then(m => m.AddUserComponent),         
        canActivate : [authGuard] 
    }, 

    //Regular Load Component
    { 
        path:'admin',
         component: AddUserComponent
    } */

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },   
    {
        path: '',
        component: LayoutComponent,
        children: [       
            {
                path: 'signal',
                component: SignalComponent,
                canActivate : [authGuard]
            },
            {
                path: 'client',
                component: ClientComponent,   
                canActivate : [authGuard] 
            },
            {
                path: 'clientProject',
                component: ClientProjectComponent,   
                canActivate : [authGuard] 
            },
            {
                path: 'TwoWayBinding',
                component: TwoWayDataBindingComponent,   
                canActivate : [authGuard] 
             },
             {
                path: 'interpolation',
                component:  InterpolationComponent ,   
                canActivate : [authGuard] 
            },  
            {
                path: 'PropertyBinding',
                component: PropertyBindingComponent,   
                canActivate : [authGuard] 
             },
             {
                path: 'EventBinding',
                component: EventBindingComponent,   
                canActivate : [authGuard] 
             },            
            {
                path: 'roles',
                component: RoleComponent,   
                // canActivate : [authGuard]     // Since I not using guard user can directly use roles link even if they are not login
            },
            {
                path: 'designation',
                component: DesignationComponent,   
                canActivate : [authGuard] 
            },
            {
                path: 'built-in-pipes',
                component: BuiltInPipesExampleComponent,   
                canActivate : [authGuard] 
             },
             {
                path: 'impure-example',
                component: FilterUsersComponent,   
                canActivate : [authGuard] 
             }, 
            {
                path: 'Attribute',
                component: AttributeComponent,   
                canActivate : [authGuard] 
             },
            {
                path: 'Structural',
                component: StructuralComponent,   
                canActivate : [authGuard] 
             },
        ]
    }, 
];
