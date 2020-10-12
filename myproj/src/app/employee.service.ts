import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>
  {
    return this.http.get("http://192.168.3.73:8080/getAll/0/6");
  }
  getById(id)
  {
    return this.http.get("http://192.168.3.73:8080/getById/",id);
  }
  saveEmployee(req){
    return this.http.post("http://192.168.3.73:8080/saveOrUpdate",req);
  }
  deleteEmployee(id){
    return this.http.get("http://192.168.3.73:8080/deleteById/",id);
  }
}
