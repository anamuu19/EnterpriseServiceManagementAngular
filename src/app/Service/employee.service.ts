import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: string = "https://hrsample.egoz.go.tz/api/employee";

  constructor(private http: HttpClient) { }

  getEmployeeInfo(employeeId: number) {
    return this.http.get(this.url + '/' + employeeId)
  }

  add(body: any){
    // return this.http.post(this.userurl, body)
  }
}
