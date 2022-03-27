import {Injectable} from "@angular/core";
import {AppSetting} from "../../../shared/config/AppSetting";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StandardDto} from "./StandardDto";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class StrengthStandardService {

  private endpoint: string = AppSetting.SOURCES_API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  calculateStandard(metric: string, sex: string, bodyweight: string, age: number, reps: number, round: number) : Observable<any> {
    return this.http.get(this.endpoint + 'calculate-standards?unitsystem=' + metric + '&sex=' + sex + '&bodyweight=' + bodyweight + '&age=' + age + '&rep=' + reps + '&round=' + round,{
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
}
