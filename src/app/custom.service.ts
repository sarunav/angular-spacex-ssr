import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private http: HttpClient) { }
  

  public getLaunches(): Observable<any> {
    return this.http.get<any>(`https://api.spaceXdata.com/v3/launches?limit=100`);
  }

  public getLauncheSuccess(params: any): Observable<any> {
    return this.http.get<any>(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${params}`);
  }

  public getLauncheAndLand(params: any): Observable<any> {
    return this.http.get<any>(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${params.successfulLaunch}&land_success=${params.successfulLanding}`);
  }

  public getAllLauncheByYear(params: any): Observable<any> {
    return this.http.get<any>(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${params.successfulLaunch}&land_success=${params.successfulLanding}&launch_year=${params.launchYear}`);
  }
}
