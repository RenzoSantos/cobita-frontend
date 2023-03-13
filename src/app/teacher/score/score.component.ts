import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SubmitActComponent } from 'src/app/student/submit-act/submit-act.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  editButton: string = 'create';
  isloading = false;
  id: any
  name: any;
  mname : any;
  lname : any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public edit: any,
    private Editdialog: MatDialogRef<SubmitActComponent> 
  ) { }

  ngOnInit(): void {

    let user = localStorage.getItem('user') as unknown as string;
    let user_data: any = JSON.parse(user);
    this.id = user_data.id,
    this.name = user_data.name,
    this.mname = user_data.mname,
    this.lname = user_data.lname,
    // console.log(this.id)

    this.ShowPost();
    if(this.edit){
      this.editButton = "update";
      this.formGroup.patchValue({
        student_id: this.edit.student_id,
        activity_id: this.edit.activity_id,
        name: this.edit.name,
        activity: this.edit.activity,
        detail: this.edit.detail,
        output: this.edit.output,
        points: this.edit.points,
        answer: this.edit.answer,
        // teacher_id: this.edit.teacher_id,
        // section: this.edit.section,
        // grade: this.edit.grade,
      })
    }
;
  }

  formGroup: FormGroup = this.formBuilder.group({
    activity_id:[''],
    student_id:[''],
    name: [''],
    mname: [''],
    lname: [''],
    activity: ['', Validators.required],
    detail: ['', Validators.required],
    output: ['', Validators.required],
    points: ['', Validators.required],
    score: ['', Validators.required],
    answer: ['', Validators.required],
    teacher_id: [''],
    section: [''],
    grade: [''],
  });

  CreatePost(){
    if(!this.edit){
    if(this.formGroup.valid){
      this.http.postrequest('SubmitActivity','',this.formGroup.value,).subscribe((res:any)=>{
        // console.log(res);
        this.formGroup.reset();
        this.Editdialog.close('create');
        this.ShowPost()
      }),  
      (error: any)=>{console.log(error)}
    }
  }else{
    this.UpdatePost()
  }
  }
  UpdatePost(){
    this.http.putrequest('ScoreActivity/', this.edit.id, this.formGroup.value).subscribe((res: any)=>{
      this.formGroup.reset();
      this.Editdialog.close('update');
      this.ShowPost()
    },
    (error: any)=>{console.log(error)}
    );
  }
  
  ShowPost(){
    this.http.getrequest('ShowActivity', '', '').subscribe((res:any)=>{
      // console.log(res);
    })
  }
}