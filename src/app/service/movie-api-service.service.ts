import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) {

   }
   baseurl ="https://api.themoviedb.org/3";
   apikey = "887bfbb70922eb9cc384bd73217db7c4";

   //bannerapidata

   bannerApiData(): Observable<any> {
    const bannerapi = `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    return this.http.get(bannerapi)
   }

}
