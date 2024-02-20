import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  base_url:string = "http://192.168.1.87:4000/api/";

  constructor() { }
  
}
