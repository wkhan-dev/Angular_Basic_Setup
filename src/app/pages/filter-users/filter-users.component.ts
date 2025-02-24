import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImpurePipeExamplePipe } from '../../shared/pipes/impurePipe/impure-pipe-example.pipe';


@Component({
  selector: 'app-filter-users',
  standalone: true,
  imports: [ImpurePipeExamplePipe, FormsModule, CommonModule],
  templateUrl: './filter-users.component.html',
  styleUrl: './filter-users.component.css'
})
export class FilterUsersComponent {
  users : string[] = ["Adam","Ahmed","Noora","Smith","Noor", "Ali", "Sooray"];
  searchTerm : string = "";
  colors = ["Red", "Blue", "White"];
  }