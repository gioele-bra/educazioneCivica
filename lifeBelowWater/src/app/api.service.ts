import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  searchManga(query: string) {
    const url = ``;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getManga(id: string) {
    const url = ``;
    let obsTracks = this.http.get(url);
    console.log(url);
    console.log(obsTracks);
    return obsTracks;
  }

}
