import {Injectable} from "@angular/core";
import {AppSetting} from "../../shared/config/AppSetting";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AnalyzeRequestDto} from "./AnalyzeRequestDto";

@Injectable({providedIn: "root"})
export class AnalyzeService {

  private endpoint: string = AppSetting.SOURCES_API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  analyze(analyzeRequest: AnalyzeRequestDto): Observable<any> {
    return this.http.post(this.endpoint + 'analyze-strength', analyzeRequest, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

}
