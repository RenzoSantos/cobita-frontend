import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,) { }

  //POST METHOD
  private baseURL: string = 'http://127.0.0.1:8000/api/'
  public postrequest(epoint: string, params:string, body: any): any{
    return this.http.post(this.baseURL + epoint + params,body);
   } 

     //PUT METHOD
  private baseURL2: string = 'http://127.0.0.1:8000/api/'
  public putrequest(epoint: string, params:string, body: any): any{
    return this.http.put(this.baseURL2 + epoint + params,body);
    } 

      //GET METHOD
  private baseURL3: string = 'http://127.0.0.1:8000/api/'
  public getrequest(epoint: string, params:string, body: any): any{
    return this.http.get(this.baseURL3 + epoint + params,body);
     } 
       //DELETE METHOD
  private baseURL4: string = 'http://127.0.0.1:8000/api/'
  public delrequest(epoint: string, params:string, body: any): any{
      return this.http.delete(this.baseURL4 + epoint + params,body);
      } 
}
