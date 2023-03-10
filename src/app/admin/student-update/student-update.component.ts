import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss']
})
export class StudentUpdateComponent implements OnInit {

  hide = true;
  isloading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public edit: any,
    private dialogUpdate: MatDialogRef<StudentUpdateComponent> 
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

  ShowTeacher(){
    this.http.getrequest('ShowStudent', '', '').subscribe((res:any)=>{
      // console.log(res)
  })
  }

  login(){
    this.isloading = true;
    if(this.formGroup.valid){
      this.formGroup.patchValue({user_type: 'student'})
      this.http.putrequest('EditTeacher/', this.edit.id, this.formGroup.value).subscribe((res: any)=>{
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
