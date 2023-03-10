import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CreatePostComponent } from 'src/app/admin/create-post/create-post.component';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = [ 'number', 'title','text','action',];

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
    this.ShowPost();
    this.UserCount();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  CreatePost() {
     this.dialog.open(CreatePostComponent,  { 
      width: '70vh',
      maxWidth: '90vw',
    }).afterClosed().subscribe(res=>{
      if(res === 'create'){
        alert('Created succesfully')
      //upadating or refreshing the page
      this.ShowPost();
      }
    }) 
  }

  ShowPost(){
    this.http.getrequest('ShowAnnouncement', '', '').subscribe((res:any)=>{
      // console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    })
  }

  Tcount: any =[];
  Scount: any =[];
  UserCount(){
    this.http.getrequest('UserCount', '', '').subscribe((res:any)=>{
      // console.log(res);
      this.Tcount = res.Tcount;
      this.Scount = res.Scount;
    })
  }

  Update(row: any){
    this.dialog.open(CreatePostComponent,  { 
      width: '70vh',
      maxWidth: '90vw',
      data: row,
    }).afterClosed().subscribe(res=>{
      if(res === 'update'){
      //upadating or refreshing the page
      alert('Update succesfully')
      this.ShowPost();
      }
    }) 
  }

  Delete(id: any){
    Swal.fire({
      title: 'Delete this Post?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.postrequest('DestroyAnnouncement/', id.toString(), '').subscribe((res:any)=>{
          alert('Deleted Successfully')
          this. ShowPost();
        })
      }
})

  }

  

}
