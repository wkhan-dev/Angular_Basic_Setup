import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {APIResponseModel} from '../model/interface/apiResponseModel'
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/constant';
import { Client } from '../model/class/client';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { 
  }

  getDesignations(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_Method.GET_All_DESIGNATION);
  }

  getAllClients(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_Method.GET_ALL_CLIENTS);
  }  

  getAllEmployee(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+ Constant.API_Method.GET_ALL_EMP)
  }

  getAllClientProjects(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL +  Constant.API_Method.GET_ALL_CLIENTPROJECTS);
  } 

  getAllRoles(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL +  Constant.API_Method.GET_ALL_ROLES);
  } 

  getAllUser()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  addClientProjectUpdate(obj: Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + Constant.API_Method.ADD_UPDATE_CLIENT_PROJECT, obj);
  }

  addUpdateClient(obj: Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + Constant.API_Method.ADD_UPDATE_CLIENT, obj);
  }

  deleteClientById(id: number): Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL + Constant.API_Method.DELETE_CLIENT_BY_CLIENT_ID + id);
  }

 

}
