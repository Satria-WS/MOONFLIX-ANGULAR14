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

   trendingMovieApiData():Observable<any> {
   const trending_MovieApi = `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`
   return this.http.get(trending_MovieApi);
    
   }
   

   getSearchMovie(data:any):Observable<any> {
    console.log(data,'movie#')
    const search_MovieApi = `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    return this.http.get(search_MovieApi);

     
   }


 
   getMovieDetails(data:any):Observable<any> {
    const detail_MovieApi = `${this.baseurl}/movie/${data}?api_key=${this.apikey}`
    return this.http.get(detail_MovieApi);

   }


}
