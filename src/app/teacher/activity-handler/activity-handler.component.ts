import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-activity-handler',
  templateUrl: './activity-handler.component.html',
  styleUrls: ['./activity-handler.component.scss']
})
export class ActivityHandlerComponent implements OnInit {

  editButton: string = 'create';
  isloading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public edit: any,
    private Editdialog: MatDialogRef<ActivityHandlerComponent> 
  ) { }

  ngOnInit(): void {
    this.ShowPost();
    if(this.edit){
      this.editButton = "update";
      this.formGroup.patchValue({
        activity: this.edit.activity,
        detail: this.edit.detail,
        output: this.edit.output,
        score: this.edit.score,
        // teacher_id: this.edit.teacher_id,
        // section: this.edit.section,
        // grade: this.edit.grade,
      })
    }
  }

  formGroup: FormGroup = this.formBuilder.group({
    activity: ['', Validators.required],
    detail: ['', Validators.required],
    output: ['', Validators.required],
    score: ['', Validators.required],
    teacher_id: [''],
    section: [''],
    grade: [''],
  });

  CreatePost(){
    if(!this.edit){
    if(this.formGroup.valid){
      this.http.postrequest('CreateActivity','',this.formGroup.value,).subscribe((res:any)=>{
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
    this.http.putrequest('EditActivity/',this.edit.id, this.formGroup.value).subscribe((res: any)=>{
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
