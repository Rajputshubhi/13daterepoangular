import { Component } from '@angular/core';
import { LoginserviceService } from './services/loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Project Angular ';
  // showdata:any;
  // getdata(data:any){
  //    console.log(data)
  //    this.showdata=data;
  // }
  constructor(private login:LoginserviceService){

  }
  postData(data:any){
      console.log(data)
      this.login.LoginUserServices(data).subscribe((res)=>{
           console.log(res)
      })
  }
  logoutdata(){
     this.login.Logoutpagedatservice().subscribe((resp)=>{
         console.log(resp)
     })
  }
}
