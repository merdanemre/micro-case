import { Injectable } from "@angular/core";
import { LoginUser } from "../models/loginUser";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AlertifyService } from "./alertify.service";
import { Router } from "@angular/router";

export class AuthService {
    constructor(
      private httpClient: HttpClient,
      private alertifyService: AlertifyService,
      private router: Router
    ) {}

  
    login(loginUser: LoginUser) {

    }
   
   
    logOut() {
     
      this.alertifyService.error("Sistemden çıkış yapıldı");
    }

    getCurrentUserId() {
      
    }
  }
  