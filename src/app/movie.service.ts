import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MovieService {
  private movieUrl = 'http://192.168.1.19:3000/api/movies';
  private bookingUrl = 'http://192.168.1.19:3000/api/booking';
  constructor(private http: HttpClient) { }

  movies = [];
bookings=[];
getRemoteMovies(): Observable<[]>{
  return this.http.get<[]>(this.movieUrl); 		
}

addRemoteMovie(customer):Observable<any>{
  return this.http.post(this.movieUrl,customer);
}
getRemoteBookings(){
  return this.http.get<[]>(this.bookingUrl);
}
getBookings(){
  return this.bookings;
}
deleteRemoteMovie(movie): Observable<[]>{
  return this.http.delete<[]>(this.movieUrl+'/'+movie.id);
}
getMovies(){
  return this.movies;
}

updateRemoteMovie(movie):Observable<any>{
  return this.http.put(this.movieUrl + "/"+movie.id,movie);
}

getRemoteMovieById(id):Observable<any>{
 return this.http.get<[]>(this.movieUrl+"/"+id);
}
}
