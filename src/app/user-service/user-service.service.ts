import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  getRepository(id: string | null): import("../repository").Repository {
    throw new Error('Method not implemented.');
  }
  getReopos(searchName: string) {
    throw new Error('Method not implemented.');
  }
  
  username!:string;
  github!:any;
  repos!:any;
 
   
  constructor(private http:HttpClient){}

  ngOnInit(){}
  search(){
    this.http.get('https://api.github.com/users/ '+ this.username + '?access_token =')
    .subscribe((github) =>{
      this.github= github;
    });
   }
  }
    

  

