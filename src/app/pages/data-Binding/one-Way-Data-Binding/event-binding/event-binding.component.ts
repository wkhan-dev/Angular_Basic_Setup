import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  message : string ="This is the message"
  buttonClicked(event: any)
  {
    console.log(event.target.value);
  }

  showWelcomeAlert()
  {
    alert("Welcome to Angular 18 tutorial")
  }

  showMessage(message: string)
  {
    alert(message)
  }
}