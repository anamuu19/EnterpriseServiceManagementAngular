import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';
import { LoginServicesService } from 'src/app/Service/login-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  employeeIdCtrl = new FormControl();
  // firstName = new FormControl();
  // employeefCtrl = new FormControl();
  employeeData: any;
  registerForm!: FormGroup

  constructor(private router: Router, private employeeService: EmployeeService, private loginServices:LoginServicesService){}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      secondName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(['',Validators.required]),
      confirmpassword: new FormControl(['',Validators.required])
    })
  }

  getEmployeeData() {
    this.employeeService.getEmployeeInfo(this.employeeIdCtrl.value).subscribe({
      next: (response: any) => {
        this.employeeData = response
        this.registerForm.patchValue({
          firstName: this.employeeData.firstName,
          secondName: this.employeeData.secondName,
          lastName: this.employeeData.lastName
        })
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }


  onSave(){
    // if()
    this.router.navigate(['/login'])

  }

}
