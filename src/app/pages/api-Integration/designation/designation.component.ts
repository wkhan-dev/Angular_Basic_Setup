import { Component, inject, OnInit } from '@angular/core';
import { IDesignation } from '../../../core/model/interface/designation';
import { MasterService } from '../../../core/services/master.service';
import { APIResponseModel } from '../../../core/model/interface/apiResponseModel';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  isLoader : boolean =true;
  designationList : IDesignation[] = [];
  masterService = inject(MasterService);
  
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result: APIResponseModel) => {
      this.designationList = result.data
      this.isLoader = false
    },error => {
      this.isLoader = false;
      alert("ApI error / Network Down")
    })
    
  }


}