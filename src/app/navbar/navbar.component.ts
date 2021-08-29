import { LoginService } from './../services/login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService,public loginService:LoginService,private router:Router) { }

studentLoginFlag:any;
formgroup:FormGroup;
  ngOnInit(): void {
    this.formgroup=new FormGroup({
      title:new FormControl(''),
      uploadDate:new FormControl(''),
      description:new FormControl('')
    })
  }
  onAddClick(){
    if(this.formgroup.valid){
    this.authService.addNotice(this.formgroup.value).subscribe(result=>{
      alert("Notice Added Successfully !!");
      this.loginService.adminLoginSubmit();
    });
    
  }

  }
 

}
