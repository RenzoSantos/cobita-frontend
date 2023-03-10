import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  isloading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    private elRef: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  formGroup: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login(){
    this.isloading = true;
    if(this.formGroup.valid){
      this.http.postrequest('login', '', this.formGroup.value).subscribe((res: any)=>{
        // console.log(res);
        this.isloading = false;
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_type', res.user.user_type); 
        localStorage.setItem('user', JSON.stringify(res.user.user_type)); 

        switch (res.user.user_type) {
          case 'Admin':
            this.router.navigate(['admin']);
            break;
          case 'teacher':
            this.router.navigate(['teacher']);
            break;
          case 'student':
            this.router.navigate(['student']);
            break;
          default:
            alert('Invalid username or password');
            break;
        }

        // console.log(sessionStorage.getItem('user'));
      
      },(error: any)=>{
        this.isloading = false;
        alert('Invalid username or password');  
        console.log(error)
      })
    }
  }

  register(){
    this.router.navigateByUrl('admin/register');
  }
}
