import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
  private url: string = "https://hrsample.egoz.go.tz/api/employee/10001";
  constructor(private http:HttpClient) { }

  add(body:any){
    return this.http.post(this.url,body);
  }
}
