import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng6OdooRPCService } from '../shared/services/angular6-odoo-jsonrpc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:string;
  isValid:boolean=false;
  loginForm:FormGroup;
  db: string='nqproject';
  public userDetails = {
    userName: null,
    password: null
  };

  constructor(private formBuilder:FormBuilder,private route:Router,private odooRPC: Ng6OdooRPCService,private toaster:ToastrService) { 
    this.loginForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit() {
  }

  onLoinClick(){
    this.isValid=true
    if(!this.loginForm.valid){
      
    }else{
      this.odooRPC.login(this.db,this.loginForm.value.userName,this.loginForm.value.password).subscribe((data: any[])=>{
        this.token=data["token"];
        if(this.token!=null || this.token!=undefined ){
          localStorage.setItem('isLoggedin', JSON.stringify(data));
          localStorage.setItem('token', this.token);
          this.route.navigate(['/dashboard']);
        }else{
          this.toaster.error("Username or Password is Incorrect")
        }
      });
      // if(this.loginForm.value.userName == "admin" && this.loginForm.value.password == "admin"){
      //   this.userDetails.userName = this.loginForm.value.userName;
      //   this.userDetails.password = this.loginForm.value.password;
      //   localStorage.setItem('isLoggedin', JSON.stringify(this.userDetails));
      //   this.route.navigate(['/project/project-list']);
      // }else{
      //   this.toaster.error("Username or Password is Incorrect")
      // }
    }
  }

}
