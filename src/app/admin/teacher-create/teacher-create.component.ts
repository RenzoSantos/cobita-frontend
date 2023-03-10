import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss']
})
export class TeacherCreateComponent implements OnInit {

  hide = true;
  isloading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ShowTeacher();
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

  ShowTeacher(){
    this.http.getrequest('ShowTeacher', '', '').subscribe((res:any)=>{
    })
  }

  login(){
    this.isloading = true;
    if(this.formGroup.valid){
      this.formGroup.patchValue({user_type: 'teacher'})
      this.http.postrequest('register', '', this.formGroup.value).subscribe((res: any)=>{
        // console.log(res);
        this.isloading = false;
        // console.log(sessionStorage.getItem('user'));
        alert('Created Succesfully')
        this.ShowTeacher();
        window.location.reload()
      },(error: any)=>{
        this.isloading = false;
        console.log(error)
      })
    }
  }

}
