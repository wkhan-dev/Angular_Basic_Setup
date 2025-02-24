import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  LinkUrl : string =  "http://localhost:4209/signal"
  firstName : string = "Keven"
  InputType_Checkbox : string = "checkbox"
  InputType_Radio : string = "radio"
}

