import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';


@Injectable()
export class HomeResolver implements Resolve<any>{
    constructor(private http:HttpClient,private homeService:HomeService){

    }
    data:any;
    resolve(route:ActivatedRouteSnapshot,rstate:RouterStateSnapshot):Observable<any>{
        if(this.data){
            return this.data;

        }else{
        this.data =this.homeService.fetchUserData();
        return this.data;

        }
    }
}