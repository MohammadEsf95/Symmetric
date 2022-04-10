import {Injectable} from "@angular/core";
import {AppSetting} from "../../shared/config/AppSetting";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AnalyzeRequestDto} from "./AnalyzeRequestDto";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({providedIn: "root"})
export class FriendsService {

  private endpoint: string = AppSetting.SOURCES_API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  addFriend(xAuthToken: string, username: any): Observable<any> {
    return this.http.post(this.endpoint + 'user/add-friend', JSON.stringify(username), {
      headers: new HttpHeaders({'Content-Type': 'application/json','x-auth-token' : xAuthToken})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  removeFriend(xAuthToken: string, username: any): Observable<any> {
    return this.http.delete(this.endpoint + 'user/delete-friend',  {
      body: username,
      headers: new HttpHeaders({'Content-Type': 'application/json','x-auth-token' : xAuthToken})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  getAllFriends(xAuthToken: string): Observable<any> {
    return this.http.get(this.endpoint + 'user/get-all-friends', {
      headers: new HttpHeaders({'Content-Type': 'application/json','x-auth-token' : xAuthToken})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
}
