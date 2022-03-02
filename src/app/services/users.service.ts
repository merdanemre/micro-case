import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { AlertifyService } from './alertify.service';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
  constructor(private httpClient:HttpClient,  private router:Router, private alertifyService:AlertifyService) { }
  API_URL = environment.api.url + "data/v1/user?limit=";
 
  getUsers(limit: number): Observable<any>{
    const httpHeaders = new HttpHeaders({'app-id': '611f33c594916dee4af13a68'});  
    return this.httpClient.get<User[]>(this.API_URL + limit, { headers: httpHeaders });
  }
  
  }
  