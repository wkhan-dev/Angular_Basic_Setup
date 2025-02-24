import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../core/model/class/client';
import { MasterService } from '../../core/services/master.service';
import { APIResponseModel } from '../../core/model/interface/apiResponseModel';
import { Constant } from '../../core/constant/constant';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../shared/reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../shared/reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  alertMessage: string ='';
  alertType: string ='';
  alertShow: boolean = false;

  masterService = inject(MasterService);
  ngOnInit(): void {
    
    this.loadClient();
  }

  loadClient() {
    this.masterService.getAllClients().subscribe((result: APIResponseModel) => {
      this.clientList = result.data;      
    });
  }

  onSaveClient(data: string) {
    this.masterService.addUpdateClient(this.clientObj).subscribe((result: APIResponseModel) => {
      if (result.result) {
        this.alertMessage = Constant.VALIDATION_MESSAGES.SUSSESS_MESSAGE_ALERT;
        this.alertType = Constant.VALIDATION_MESSAGES.SUCCESS_MESSAGE_TYPE
        this.alertShow = true
        this.loadClient();
        this.clientObj = new Client();
      }
      else
      {
        this.alertMessage = Constant.VALIDATION_MESSAGES.ERROR_MESSAGE_ALERT + result.message;
        this.alertType = Constant.VALIDATION_MESSAGES.ERROR_MESSAGE_TYPE
        this.alertShow = true
      }
        
    })
  }

  onResetClient() {
   
    this.clientObj = new Client();
  }

  onEditClient(item: Client){
    this.clientObj = item;
  }

  onDeleteClient(id: number) {
    const isDelet = confirm("Are you sure you want ot delete?");
    if (isDelet) 
    {
      this.masterService.deleteClientById(id).subscribe((result: APIResponseModel) => {
        if (result.result) {
        
        this.alertMessage = Constant.VALIDATION_MESSAGES.SUSSESS_MESSAGE_ALERT_DELETED;
        this.alertType = Constant.VALIDATION_MESSAGES.SUCCESS_MESSAGE_TYPE
        this.alertShow = true
        this.loadClient();
        this.clientObj = new Client();
        }
        else
        {
        this.alertMessage = Constant.VALIDATION_MESSAGES.ERROR_MESSAGE_ALERT_DELETED + result.message;
        this.alertType = Constant.VALIDATION_MESSAGES.ERROR_MESSAGE_TYPE
        this.alertShow = true
        }
      })
    }
  }
}