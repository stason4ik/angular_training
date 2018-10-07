import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private configUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.configUrl);
  }

  getUser(userId: number): Observable<UserModel>{
    return this.http.get<UserModel>(this.configUrl + '/' + userId);
  }

  deleteUser(userId: number){
    return this.http.delete(this.configUrl + '/' + userId);
  }

  updateUser(user: UserModel): Observable<UserModel>{
    return this.http.put<UserModel>(this.configUrl + '/' + user.id, user);
  }

  createUser(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(this.configUrl, user);
  }
}
