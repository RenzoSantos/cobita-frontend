import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ScoreComponent } from 'src/app/teacher/score/score.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-score',
  templateUrl: './view-score.component.html',
  styleUrls: ['./view-score.component.scss']
})
export class ViewScoreComponent implements OnInit {
  displayedColumns: string[] = [ 'number', 'activity','detail','output','points','score'];

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
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ShowActivity();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  CreateTeacher() {
     this.dialog.open(ScoreComponent,  { 
      width: '70vh',
      maxWidth: '90vw',
    }).afterClosed().subscribe(res=>{
      if(res === 'create'){
      //upadating or refreshing the page
      this.ShowActivity();
      }
    }) 
  }


  ShowActivity(){
    this.http.getrequest('ViewAnswer', '', '').subscribe((res:any)=>{
      // console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    })
  }

  Update(row: any){
    this.dialog.open(ScoreComponent,  { 
      width: '70vh',
      maxWidth: '90vw',
      data: row,
    }).afterClosed().subscribe(res=>{
      if(res === 'update'){
      //upadating or refreshing the page
      this.ShowActivity();
      }
    }) 
  }

  Delete(id: any){
    Swal.fire({
      title: 'Delete this Student?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.postrequest('DestroyActivity/', id.toString(), '').subscribe((res:any)=>{
          alert('Deleted Successfully')
          this.ShowActivity();
        })
      }
})

  }
}