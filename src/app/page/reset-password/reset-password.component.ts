import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private router: Router,
  ) { }
  loginUser: any = {};
  ngOnInit(): void {
  }
  goLogin(){
    this.alertifyService.warning("Şifre Sıfırlama İşlemi İptal Edildi!");
    this.router.navigateByUrl('/login');
  }
  resetPassword(){
    var data = this.loginUser.mail;
    if(this.loginUser.mail != undefined){
      this.router.navigateByUrl('/login');
      this.alertifyService.success("Şifre Başarıyla Sıfırlandı Lütfen Mailinizi Kontrol Edin!");
    }else
    {
      this.alertifyService.error("E-Mail Alanı Boş Girilemez!");
    }
  }
}
