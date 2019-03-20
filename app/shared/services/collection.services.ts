import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URL, API_KEY } from '../config';
import { CollectionModel } from '../models/collection.model';

@Injectable()
export class CollectionService {
  moviesList = API_URL + '/4/list/1?page=1&api_key=' + API_KEY + '&language=ml';
  latestMovies = API_URL + '/3/movie/latest?api_key=' + API_KEY + '&language=en-US';
  nowPlaying = API_URL + '/3/movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=1';
  upcomingMovies = API_URL + '/3/movie/upcoming?api_key=' + API_KEY + '&language=en-US&page=1';
  popularMovies = API_URL + '/3/movie/popular?api_key=' + API_KEY + '&language=en-US&page=1';
  topRatedMovies = API_URL + '/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1';
  trendingMovies = API_URL + '/3/trending/all/day?api_key=' + API_KEY;

  constructor(private http: Http) {}
  getCollections(): Observable<any> {
    return this.http.get(this.moviesList).pipe(map(res => res.json(), error => error.json()));
  }
  getMoviesDetails(id): Observable<any> {
    let ID = id;
    let moviesDetails = API_URL + '/3/movie/' + ID + '?api_key=' + API_KEY + '&language=en-US';
    return this.http.get(moviesDetails).pipe(map(res => res.json(), error => error.json()));
  }
  getMoviesVideos(id): Observable<any> {
    let ID = id;
    let moviesVideos = API_URL + '/3/movie/' + ID + '/videos?api_key=' + API_KEY + '&language=en-US';
    return this.http.get(moviesVideos).pipe(map(res => res.json(), error => error.json()));
  }
  getNowPlayingMovies(): Observable<any> {
    return this.http.get(this.nowPlaying).pipe(map(res => res.json(), error => error.json()));
  }
  getUpcomingMovies(): Observable<any> {
    return this.http.get(this.upcomingMovies).pipe(map(res => res.json(), error => error.json()));
  }
  getPopularMovies(): Observable<any> {
    return this.http.get(this.popularMovies).pipe(map(res => res.json(), error => error.json()));
  }
  getTopRatedMovies(): Observable<any> {
    return this.http.get(this.topRatedMovies).pipe(map(res => res.json(), error => error.json()));
  }
  getTrendingMovies(): Observable<any> {
    return this.http.get(this.trendingMovies).pipe(map(res => res.json(), error => error.json()));
  }
}
