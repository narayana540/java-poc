import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  resData:any;
  constructor(private ser:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

getAllData(){
   this.ser.getAll().subscribe(response=>{
     this.resData=response.content;
     console.log( this.resData,"lissssssssst");  
   })
}
editData(i){
  this.router.navigate(['create',i])
}

}
