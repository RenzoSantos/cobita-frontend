import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  hide = true;
  isloading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  formGroup: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    mname: [''],
    lname: ['', Validators.required],
    grade: [''],
    section: [''],
    image: [''],
    about: [''],
    user_type: [''],
    active: [''],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login(){
    this.isloading = true;
    this.formGroup.patchValue({user_type: 'Admin'})
    if(this.formGroup.valid){
      this.http.postrequest('register', '', this.formGroup.value).subscribe((res: any)=>{
        // console.log(res);
        this.isloading = false;
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        // console.log(sessionStorage.getItem('user'));
        this.router.navigate(['student']);
      },(error: any)=>{
        this.isloading = false;
        console.log(error)
      })
    }
  }

  register(){
    this.router.navigateByUrl('login');
  }
}
