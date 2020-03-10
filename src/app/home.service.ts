import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {HttpClient  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  configUrl='https://jsonplaceholder.typicode.com/users';

  
  constructor(private http:HttpClient) { }

  fetchUserData():Observable<any>{
    return this.http.get(this.configUrl);
  }

  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('userId');
    if(token){
      return true;
    }
    else{
      return false;
    }
  }
  
}
