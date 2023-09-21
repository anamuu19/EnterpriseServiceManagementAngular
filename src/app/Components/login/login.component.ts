import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/Service/login-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private loginServices: LoginServicesService, private router: Router){

  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
    });


      // this.fetchAllIsland();



  }

  // fetchAllIsland(){
  //   this.loginServices.getAll().subscribe((response)=>{
  //     console.log("island service => ",response);
  //   })
  // }
  onSave(){
    const values = this.loginForm.value;
    console.log('form values =>', values);

  }


}
