import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { LoginUser } from "../../models/loginUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  constructor(
    private alertifyService: AlertifyService,
    private router: Router
  ) { }
  user = 'mikro@mikro.com.tr';
  password = '123456';
  loginUser: any = {};
  ngOnInit() {
  }
  goRegister(){
    //window.open(`register`, '_blank');
    this.router.navigateByUrl('/reset');
  }
  login(){
    if  (this.user===this.loginUser.mail && this.password===this.loginUser.password){
      this.alertifyService.success("Giriş Başarılı!");
      this.router.navigateByUrl('/users');
    }else
    {
      this.alertifyService.error("Lütfen E-Mail ve Şifreyi Kontrol Edin!");
    }
  }
}
