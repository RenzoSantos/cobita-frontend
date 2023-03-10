import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public edit: any,
    private Editdialog: MatDialogRef<CreatePostComponent> 
  ) { }

  ngOnInit(): void {
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
    title: ['', Validators.required],
    text: ['', Validators.required],
  });

  CreatePost(){
    if(!this.edit){
    if(this.formGroup.valid){
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
