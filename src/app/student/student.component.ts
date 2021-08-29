import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  formGroup: FormGroup;
  username=new FormControl('');
  password=new FormControl('');
  studentList:any;
  signInErrorFlag=false;
  constructor(private router:Router,private loginService:LoginService, private authService:AuthService) { }

  ngOnInit(): void {
    this.formGroup=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })
  }


  studentLoginSubmit()
  {
    if(this.formGroup.valid){
      this.authService.studentSignIn().subscribe(result=>{
        this.studentList=result;
        this.signInErrorFlag=false;
        this.studentList.forEach(studentList => {
          if(studentList.username==this.formGroup.value.username && studentList.password==this.formGroup.value.password){
            // alert("Login Successful !!");
            this.signInErrorFlag=true; 
            this.loginService.studentRegistered=true;
            this.router.navigate(['/student', 'studentdash']);
          }
        });
        if(this.signInErrorFlag==false){
          alert("Invalid userid or Password !!");
          }
        
      });
    }
  }
  

}
