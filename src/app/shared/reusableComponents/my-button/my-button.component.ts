import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnClass : string =''
  @Input() btnText : string =''
  @Input() formValidCheck: boolean = false;
  
  @Output() onbtnClicked = new EventEmitter<any>();
  
  onClick()
  {
    this.onbtnClicked.emit('adim');
  }
  }