import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerUrl } from '../config/api';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  addUser(user) {
    return this.http.post(registerUrl,user );
  }

  getAllUsers(){
    return this.http.get(registerUrl );
  }
}
