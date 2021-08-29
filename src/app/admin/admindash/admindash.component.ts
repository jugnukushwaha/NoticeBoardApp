import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.scss']
})
export class AdmindashComponent implements OnInit {

  constructor(private authService:AuthService,public loginService:LoginService) { 
    
  }
  studentLoginFlag=this.loginService.studentRegistered;
  formgroup:FormGroup;
  userId:any;

  ngOnInit(): void {
    this.loginService.adminLoginSubmit();
    this.formgroup=new FormGroup({
      title:new FormControl(''),
      uploadDate:new FormControl(''),
      description:new FormControl('')
    })
  }
  
  onNoticeDelete(notice:any){
    this.authService.delete(notice.id).subscribe(result=>{
      alert("Notice Deleted Successfully !!");
      this.loginService.adminLoginSubmit();
    });

  }

  onEditClick(){
    if(this.formgroup.valid){
    this.authService.editNotice(this.formgroup.value,this.userId).subscribe(result=>{
      alert("Notice Edited Successfully !!");
      this.loginService.adminLoginSubmit();
    });
    
  }

  }
  setId(id:any){
    console.log(id);
    this.userId=id;
  }
  

}
