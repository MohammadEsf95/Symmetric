import {Injectable} from "@angular/core";
import {AppSetting} from "../../shared/config/AppSetting";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SignInDto} from "../../shared/dto/SignInDto";
import {catchError, Observable, throwError} from "rxjs";
import {RmCalcReqDto} from "./RmCalcReqDto";
import {WilksCalcReqDto} from "./WilksCalcReqDto";

@Injectable({providedIn: "root"})
export class CalculatorService {

  private endpoint: string = AppSetting.SOURCES_API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  oneRmCalc(rmCalcDto: RmCalcReqDto): Observable<any> {
    return this.http.post(this.endpoint + 'calculate-one-rep-max', rmCalcDto, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  wilksCalc(wilksCalcDto: WilksCalcReqDto): Observable<any> {
    return this.http.post(this.endpoint + 'calculate-wilks', wilksCalcDto, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(err => {
        console.log('Handling error and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
}
