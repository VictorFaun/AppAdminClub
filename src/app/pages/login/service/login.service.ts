import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config/config.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url = "";
  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(
    private _config_: ConfigService,
    private http: HttpClient
  ) {
    this.base_url = this._config_.base_url;
  }

  login(data: any) {
    let link = this.base_url + "auth/signin";
    let info = {
      email: data.email,
      password: data.password
    };

    return new Promise((resolve, reject) => {
      this.http.post(link, info, this.options).toPromise().then((rslt: any) => {
        resolve(rslt);
      }).catch((error: any) => {
        reject(error.error);
      });
    });
  }
}
