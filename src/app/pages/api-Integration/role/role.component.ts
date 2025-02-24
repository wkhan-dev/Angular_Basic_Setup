import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel } from '../../../core/model/interface/apiResponseModel';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../../../core/model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent  implements OnInit {
 
  // new way to inject httpClient
  http = inject (HttpClient);
  roleList : IRole[] = [];
  
  
    /*  THIS IS THE OLD VERSION WAY OF USING http CLIENT
     constructor(private http:HttpClient){ 
  
    } */
  
    ngOnInit(): void {
      console.log("init is called");
      this.getAllRoles();
    }
  
    getAllRoles(){
          this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel) => {
          this.roleList = res.data;
  });
  
    }
  
  }
  