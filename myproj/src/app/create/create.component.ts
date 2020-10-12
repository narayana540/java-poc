import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  profileForm = this.fb.group({
    name: ['',Validators.required],
    salary: ['',[Validators.required,Validators.pattern('^[0-9]*$')]],
    city:['',Validators.required],
    phone:['',[Validators.required]]
  });
  constructor(private fb:FormBuilder,private ser:EmployeeService) { }

  ngOnInit(): void {
  }

  onSave(e){
    var req={
      "name":e.name,
      "salary":e.salary,
      "city":e.city,
      "phone":e.phone.toString()
    }
    this.ser.saveEmployee(req).subscribe(res=>{
      console.log(res,'ddd');
    })
  }
}
