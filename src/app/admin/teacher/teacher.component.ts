import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { TeacherCreateComponent } from '../teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from '../teacher-update/teacher-update.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  displayedColumns: string[] = [ 'number', 'teacher','action',];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  @ViewChild(MatSort)
  sort!: MatSort;

  hide = true;
  isloading = false;

    //CURRENT PAGE OF TABLE
    Page = 1;

    //CURRENT PAGE SIZE OF TABLE
    SizePerpage = 10;
    
    MovePage(event: PageEvent) {
      this.Page = event.    pageIndex + 1;
      this.SizePerpage = event.pageSize;
    }

    
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.ShowTeacher();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  CreateTeacher() {
     this.dialog.open(TeacherCreateComponent,  { 
      width: '70vh',
      maxWidth: '90vw',
    }).afterClosed().subscribe(res=>{
      if(res === 'save'){
      //upadating or refreshing the page
      this.ShowTeacher();
      }
    }) 
  }

  ShowTeacher(){
    this.http.getrequest('ShowTeacher', '', '').subscribe((res:any)=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    })
  }

  Update(row: any){
    this.dialog.open(TeacherUpdateComponent,  { 
      width: '70vh',
      maxWidth: '90vw',
      data:row,
    }).afterClosed().subscribe(res=>{
      if(res === 'save'){
      //upadating or refreshing the page
      this.ShowTeacher();
      }
    }) 
  }

  Delete(id: any){
    Swal.fire({
      title: 'Delete this teacher?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.postrequest('DestroyTeacher/', id.toString(), '').subscribe((res:any)=>{
          alert('Deleted Successfully')
          this.ShowTeacher();
        })
      }
})

  }
}
