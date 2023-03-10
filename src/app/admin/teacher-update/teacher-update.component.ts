import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss']
})
export class TeacherUpdateComponent implements OnInit {
  hide = true;
  isloading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public edit: any,
    private dialogUpdate: MatDialogRef<TeacherUpdateComponent> 
  ) { }

  ngOnInit(): void {
    this.ShowTeacher();
    if(this.edit){

      this.formGroup.patchValue({
        name: this.edit.name,
        mname: this.edit.mname,
        lname: this.edit.lname,
      })
    }
    console.log(this.formGroup.value)
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
  });

  Teacher_name: any = [];
  Teacher_mname: any = [];
  Teacher_lname: any = [];
  ShowTeacher(){
    this.http.getrequest('ShowTeacher', '', '').subscribe((res:any)=>{
      console.log(res)

    })
  }

  login(){
    this.isloading = true;
    if(this.formGroup.valid){
      this.formGroup.patchValue({user_type: 'teacher'})
      this.http.putrequest('EditTeacher/'+this.edit.id, '', this.formGroup.value).subscribe((res: any)=>{
        // console.log(res);
        this.isloading = false;
        // console.log(sessionStorage.getItem('user'));
        alert('Updated Succesfully')
        this.ShowTeacher();
        window.location.reload()
      },(error: any)=>{
        this.isloading = false;
        console.log(error)
      })
    }
  }

}
