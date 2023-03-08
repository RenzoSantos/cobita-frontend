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
        localStorage.setItem('user', JSON.stringify(res.user));
        // console.log(sessionStorage.getItem('user'));
        this.router.navigate(['admin']);
      },(error: any)=>{
        this.isloading = false;
        alert('Wrong Credentials');
        console.log(error)
      })
    }
  }

  register(){
    this.router.navigateByUrl('admin/register');
  }
}
