import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {
  a= 10;
  b = 20;
  items = [10,20,30,40,50];
  userRole : string = "admin";
}

