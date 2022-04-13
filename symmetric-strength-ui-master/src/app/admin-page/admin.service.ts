import {Injectable} from "@angular/core";
import {AppSetting} from "../shared/config/AppSetting";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({providedIn: "root"})
export class AdminService {

  private endpoint: string = AppSetting.SOURCES_API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  getAllUsers(xAuthToken: string, page: number, pageSize: number): Observable<any> {
    return this.http.get(this.endpoint + 'admin/get-all-user?page=' + page + "&page_size=" + pageSize, {
      headers: new HttpHeaders({'Content-Type': 'application/json','x-auth-token' : xAuthToken})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
}
