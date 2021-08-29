import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  formGroup: FormGroup;
  username=new FormControl('');
  password=new FormControl('');
  adminList:any;
  signInErrorFlag=false;
  constructor(private loginService:LoginService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.formGroup=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })
  }


  adminLoginSubmit()
  {
    if(this.formGroup.valid){
      this.authService.login().subscribe(result=>{
        this.adminList=result;
        this.signInErrorFlag=false;
        this.adminList.forEach(adminList => {
          if(adminList.username==this.formGroup.value.username && adminList.password==this.formGroup.value.password){
            // alert("Login Successful !!");
            this.signInErrorFlag=true; 
            this.loginService.adminLoggedIn=true;
            this.router.navigate(['/admin', 'admindash']);
          }
        });
        if(this.signInErrorFlag==false){
          alert("Invalid username or Password !!");
          }
        
      });
    }
  }

}
