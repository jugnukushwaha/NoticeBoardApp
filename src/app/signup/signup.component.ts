import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  formGroup: FormGroup;
  username=new FormControl('');
  password=new FormControl('');
  adminList:any;
  signInErrorFlag=false;
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.formGroup=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }


  signUpSubmit()
  {
    if(this.formGroup.valid){
      // console.log(this.formGroup);
      this.authService.signUp(this.formGroup.value).subscribe(result=>{
        
          alert("Student Registration SuccessFull, You Can LogIn Now!!")
          this.router.navigate(['/', 'student']);
      });
    }
  }

}
