import {Injectable} from "@angular/core";
import {AppSetting} from "../config/AppSetting";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {SignInDto} from "../dto/SignInDto";
import {catchError, map, Observable, take, throwError} from "rxjs";
import {SetPasswordDto} from "../dto/SetPasswordDto";

@Injectable({providedIn: "root"})
export class AuthService {

  private endpoint: string = AppSetting.SOURCES_API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  signIn(signInDto: SignInDto): Observable<any> {
    return this.http.post(this.endpoint + 'signin', signInDto, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  signUp(email: string): Observable<any> {
    return this.http.post(this.endpoint + 'signup', {
      email,
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(this.endpoint + 'forgot-password', {
      email,
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  setPassword(setPasswordDto: SetPasswordDto): Observable<any> {
    return this.http.post(this.endpoint + 'set-password', {
      setPasswordDto,
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  completeProfile(xAuthToken: string): Observable<string> {
    return this.http.post<string>(this.endpoint + 'complete-profile', {
      xAuthToken,
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message || "server error.");
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }
}
