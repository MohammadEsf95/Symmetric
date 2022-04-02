import {Injectable} from "@angular/core";
import {AppSetting} from "../../shared/config/AppSetting";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SignInDto} from "../../shared/dto/SignInDto";
import {catchError, Observable, throwError} from "rxjs";
import {ChangeSettingDto} from "./ChangeSettingDto";

@Injectable({providedIn: "root"})
export class ChangeSettingService {

  private endpoint: string = AppSetting.SOURCES_API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  changeSetting(changeSettingDto: ChangeSettingDto, xAuthToken:string): Observable<any> {
    return this.http.post(this.endpoint + 'user/change-settings', changeSettingDto, {
      headers: new HttpHeaders({'Content-Type': 'application/json','x-auth-token' : xAuthToken})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  deleteAccount(xAuthToken:string): Observable<any> {
    return this.http.delete(this.endpoint + 'user/delete-account', {
      headers: new HttpHeaders({'Content-Type': 'application/json','x-auth-token' : xAuthToken})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
}
