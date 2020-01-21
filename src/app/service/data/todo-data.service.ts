import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list/list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  
  getLoginData(username): Observable<any>{
    return this.http.get<Todo[]>(`http://localhost:8080/users/'${username}'/todos`);

  }

  deleteData(username,id):Observable<any>{
    return this.http.delete<Todo[]>(`http://localhost:8080/users/${username}/todos/${id}`);

  }
}
