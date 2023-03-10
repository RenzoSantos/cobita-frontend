import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = [ 'number', 'title','text',];

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
   private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.ShowPost();
    this.UserCount();
  }

  post: any =[];
  ShowPost(){
    this.http.getrequest('ShowAnnouncement', '', '').subscribe((res:any)=>{
      // console.log(res);
      this.post = res;
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

}

