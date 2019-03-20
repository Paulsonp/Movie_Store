import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URL, API_KEY } from '../config';

@Injectable()
export class TvCollectionService {
  tvAirTodayList = API_URL + '/4/tv/airing_today?api_key=' + API_KEY + '&language=en-US&page=1';

  constructor(private http: Http) {}
  getTvTodayCollections(): Observable<any> {
    return this.http.get(this.tvAirTodayList).pipe(map(res => res.json(), error => error.json()));
  }
  getTvDetails(id): Observable<any> {
    console.log('hai iam getTvDetails', id);
    let ID = id;
    let tvDetails = API_URL + '/3/tv/' + ID + '?api_key=' + API_KEY + '&language=en-US';
    return this.http.get(tvDetails).pipe(map(res => res.json(), error => error.json()));
  }
  getTvVideos(id): Observable<any> {
    let ID = id;
    let tvVideos = API_URL + '/3/tv/' + ID + '/videos?api_key=' + API_KEY + '&language=en-US';
    return this.http.get(tvVideos).pipe(map(res => res.json(), error => error.json()));
  }
}
