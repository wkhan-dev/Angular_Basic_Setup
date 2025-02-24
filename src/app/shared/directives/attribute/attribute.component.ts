import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  isActive= false;
  backgroundColor ='red';
  fontSize = 10;
  
  toggleActive()
  {
    this.isActive = !this.isActive;
  }
  
  styleUpdate()
  {
    this.backgroundColor ='lightgreen';
    this.fontSize = 32;
  }
  
  }
  