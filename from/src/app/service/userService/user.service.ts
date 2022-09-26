import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URI: string;
  constructor(private http: HttpClient) { 
    this.URI = `${environment.apiUrl}`
  }

  public list():Observable<any>{
    return this.http.get<any>(`${this.URI}/user/list`);
  }

  save(data): Observable<any> {   
    return this.http.post<any>(`${this.URI}/user/save`,data)
  }
}
