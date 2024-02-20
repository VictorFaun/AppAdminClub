import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password: string = "";
  email: string = ""

  constructor(
    private _storage_: Storage,
    private _login_: LoginService,
    private _router_: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    this._login_.login({ email: this.email, password: this.password }).then((rslt:any)=>{
      console.log(rslt)
      this._storage_.set("user", rslt)
      this._router_.navigate(["/home"]).then(res=>console.log(res));
    }).catch((err)=>{
      console.error(err)
    })
  }

}
