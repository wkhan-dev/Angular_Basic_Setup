import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterService } from '../../../core/services/master.service';
import { NaPipe } from '../purePipe/na.pipe';

@Component({
  selector: 'app-built-in-pipes-example',
  standalone: true,
  imports: [CommonModule, NaPipe],
  templateUrl: './built-in-pipes-example.component.html',
  styleUrl: './built-in-pipes-example.component.css'
})
export class BuiltInPipesExampleComponent implements OnInit {

  masterService = inject(MasterService);
  
    //Async Pipe
  userList$ : Observable<any> = new Observable<any>  //This is creating an observable and we do that convention (industry standard) is to do it with $sign
    
  ngOnInit(): void {
    this.userList$ = this.masterService.getAllUser();
  }
  
  today: Date = new Date();
  text: string = "Text example";
  amount = 5628;
  perVal : number = 8.369235;
  percentVal : number = 6.2038;
  jsonVal : object ={
    name : 'David',
    version : '1.1'}
  myArray : number [] = [1,2,4,45,5,6,7];
  myObject: {[key: string]: string} = {first :"one", second :"second"};

   students: any[] = [{ name: 'Jack', city: 'New York City', state: 'NY' , Phone: '' }];

  }