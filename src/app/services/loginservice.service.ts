import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { 
         
  }

  Api_Url='https://be.eazyagile.com/login';
  LoginUserServices(datas:any){
     this.http.post(this.Api_Url,{'url':'devtest','email':datas.email,'password':datas.password,'gToken':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2Njg0NDgyNzksImV4cCI6MTY2ODQ3NzA3OSwianRpIjp7InVzZXJJZCI6ImVjYWM3NTBmMzlmMTllMmIyZGRlMjA5YTQyNWMwYjgxIiwiZnVsbE5hbWUiOiJTaHViaGFtIFNTIiwiZW1haWwiOiJzaHViaGFtLnNyaXZhc3RhdmFAZGV2c3RyaW5neC5jb20iLCJ1cmwiOiJkZXZ0ZXN0Iiwib3JnSWQiOiJkNTg1ZGRjNTY5Zjc4YzgwZjM5OTM2NjFlZjE0NWI2ZCIsIm9yZ05hbWUiOm51bGwsImxvZ29VcmwiOm51bGwsInNob3J0TG9nb1VybCI6bnVsbCwidXNlclR5cGUiOiJhZG1pbiIsImRlZmF1bHRSb2xlIjoic3lzdGVtQWRtaW4iLCJzdGF0dXMiOiJBY3RpdmUiLCJvcmdQbGFuIjoiZnJlZSIsInByb2plY3RzIjpbeyJwcm9qZWN0SWQiOiI4YTAxNGYxNmFkZDk5ZGFlZjAyOGJmZjUxNmQzNzExMyIsInByb2plY3ROYW1lIjoic2h1YmhhbSBzIiwiYm9hcmRJZCI6Ijk1ZGQ5YzIxYjcxMzE0OTg0ZjNkYjg3MTNkNjUyZWJjIn1dLCJmY210b2tlbiI6IiJ9fQ.rUyk8k_tJwR7KlNBwIJinCJQVwy-QDUqGon8KFm-kAG_VKEFO-BDss5HSN3M-a9hBayo3CfUgyLqcV1FZ04eaQ','type':String})
  }

   

}