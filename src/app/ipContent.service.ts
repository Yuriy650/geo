import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Data} from './models/data.model';

@Injectable({providedIn: 'root'})
export class IpContentService {
  constructor(private http: HttpClient){

  }

  fetchIpContent(ip: string): Observable<Data> {
    return this.http.get<Data>(`https://ipapi.co/`+`${ip}`+`/json/`)
  }
}
