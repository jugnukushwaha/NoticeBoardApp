import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private http : HttpClient){}

    login():Observable<any>{
        return this.http.get('http://localhost:3000/login');
    }
    noticeList():Observable<any>{
        return this.http.get('http://localhost:3000/notice');
    }
    signUp(data:any):Observable<any>{
        return this.http.post("http://localhost:3000/signup",data);
    }
    studentSignIn():Observable<any>{
        return this.http.get("http://localhost:3000/signup");
    }
    delete(id:any):Observable<any>{
        return this.http.delete("http://localhost:3000/notice/"+id);
    }
    addNotice(data:any):Observable<any>{
        return this.http.post("http://localhost:3000/notice",data);
    }
    editNotice(data:any,id:any):Observable<any>{
        return this.http.put("http://localhost:3000/notice/"+id,data);
    }
}