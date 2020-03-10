import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { User } from './model/user.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import {Observable} from'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  userList:Array<User>=[];
  headElements=[];
  subscription: Subscription
  constructor(private homeService:HomeService,private activeRout:ActivatedRoute) {
   }
  ngOnInit() {
    this.headElements = ['ID', 'NAME', 'EMAIL', 'PHONE NO.'];
    this.userList=this.activeRout.snapshot.data.resolveData;
    

      }
      ngOnDestroy(){

      }

  }

