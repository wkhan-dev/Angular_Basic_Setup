import { Component, inject, OnInit } from '@angular/core';
import { Constant } from '../../core/constant/constant';
import { APIResponseModel } from '../../core/model/interface/apiResponseModel';
import { ClientProject } from '../../core/model/class/clientProject';
import { Employee } from '../../core/model/class/employee';
import { MasterService } from '../../core/services/master.service';
import { Client } from '../../core/model/class/client';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../../shared/reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  
  masterService=inject(MasterService);
  clientList: Client[] = [];
  employeeList :Employee[] =[];
  clientProject : ClientProject[]= []
 Required_Message = Constant.VALIDATION_MESSAGES.INPUT_REQUIRED;
 Min_Required_Message = Constant.VALIDATION_MESSAGES.MIN_REQUIRED;
 alertMessage: string ='';
 alertType: string ='';
 alertShow: boolean = false;

  projectForm: FormGroup = new FormGroup({
    clientProjectId   : new FormControl(0),
    projectName : new FormControl("", [Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),

  })


  
  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
    this.GetAllClientProjects();
  }


  getAllClients()
  {
    this.masterService.getAllClients().subscribe((result: APIResponseModel) =>{
      this.clientList = result.data;
    });
  }

  getAllEmployee()
  {
      this.masterService.getAllEmployee().subscribe((result: APIResponseModel) =>{
      this.employeeList =result.data;
    });
  }

  GetAllClientProjects()
  {
    this.masterService.getAllClientProjects().subscribe((result: APIResponseModel) =>{
      this.clientProject =result.data;
    });
  }

  onResetClientProject(){

  }
  
  onEditClient(item:  ClientProject)
  {
    this.projectForm.controls['projectName'].setValue(item.projectName);
    this.projectForm.controls['startDate'].setValue(  item.startDate);
    this.projectForm.controls['expectedEndDate'].setValue(item.expectedEndDate);
    this.projectForm.controls['leadByEmpId'].setValue(item.empId);
   }

  onDeleteClient(id: number) {}

  onSaveClientProject(){
    const formValue = this.projectForm.value;
    this.masterService.addClientProjectUpdate(formValue).subscribe((result : APIResponseModel)=>{
      if(result.result)
      {
        this.alertMessage = Constant.VALIDATION_MESSAGES.SUSSESS_MESSAGE_ALERT;
        this.alertType = Constant.VALIDATION_MESSAGES.SUCCESS_MESSAGE_TYPE
        this.alertShow = true
        this.GetAllClientProjects();        
      }
      else
      {
        this.alertMessage = Constant.VALIDATION_MESSAGES.ERROR_MESSAGE_ALERT + result.message;
        this.alertType = Constant.VALIDATION_MESSAGES.ERROR_MESSAGE_TYPE
        this.alertShow = true
      }

    })

  }
}
