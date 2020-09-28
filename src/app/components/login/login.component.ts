import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  userName:string = "";
  upassword:string = ""; 
  users:any;
  showError = false;
  user:any;

  constructor(private userService: UserService,
    private router: Router,) {
this.userService.getAllUsers().subscribe(result =>{

this.users = result || [];
},err=>{
  console.log('Error getting users',err);
})
   };

  ngOnInit() {
  }

  login(name,pw) {
    
  this.users.forEach(user => {
      console.log('userform username',name,'datauserN',user.username)
    if((user.username ===name) && (user.password === pw)){
     
      console.log('else1',user);
      this.user = user;
      // sessionStorage.setItem("userData",this.user);
      this.router.navigateByUrl('/shop');
    } else {
      console.log('else',user);
      this.showError = true;
      
    }
  });    
  }

}