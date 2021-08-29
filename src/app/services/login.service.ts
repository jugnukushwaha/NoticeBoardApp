import { Injectable } from '@angular/core';
import { AuthService } from './authentication.service';

@Injectable()
export class LoginService {
  noticeLists:any;
  constructor(private authService:AuthService) { }
  studentRegistered=false;
  adminLoggedIn=false;
  updateLoginFlag(){
      this.studentRegistered=false;
      this.adminLoggedIn=false;
  }

  adminLoginSubmit()
  {
      this.authService.noticeList().subscribe(result=>{
        this.noticeLists=result;
        // console.log(this.noticeLists)
      });
    
  }
}