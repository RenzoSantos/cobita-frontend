import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  editButton: string = 'create';
  isloading = false;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public edit: any,
    private Editdialog: MatDialogRef<CreatePostComponent> 
  ) { }

  ngOnInit(): void {

    let user = localStorage.getItem('user') as unknown as string;
    let user_data: any = JSON.parse(user);
    this.id = user_data.id,

    this.ShowPost();
    if(this.edit){
      this.editButton = "update";
      this.formGroup.patchValue({
        title: this.edit.title,
        text: this.edit.text,
      })
    }
  }

  formGroup: FormGroup = this.formBuilder.group({
    teacher_id: [''],
    title: ['', Validators.required],
    text: ['', Validators.required],
  });

  CreatePost(){
    if(!this.edit){
    if(this.formGroup.valid){
      this.formGroup.patchValue({teacher_id: this.id})
      this.http.postrequest('CreateAnnouncement','',this.formGroup.value,).subscribe((res:any)=>{
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
    this.formGroup.patchValue({teacher_id: this.id})
    this.http.putrequest('EditAnnouncement/',this.edit.id, this.formGroup.value).subscribe((res: any)=>{
      this.formGroup.reset();
      this.Editdialog.close('update');
      this.ShowPost()
    },
    (error: any)=>{console.log(error)}
    );
  }
  
  ShowPost(){
    this.http.getrequest('ShowAnnouncement', '', '').subscribe((res:any)=>{
      // console.log(res);
    })
  }

}
