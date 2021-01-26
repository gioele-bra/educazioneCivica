import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = `https://3000-dbc88d7a-8bd3-405c-a175-5a1610ae4b16.ws-eu03.gitpod.io/`;

  getAnimalia() {
    const url = `${this.baseUrl}/animalia`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getNameAnimalia(name: string) {
    const url = `${this.baseUrl}/animalia/${name.toUpperCase()}`;
    let obsTracks = this.http.get(url);
    console.log(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getPlantae() {
    const url = `${this.baseUrl}/plantae`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getNamePlantae(name: string) {
    const url = `${this.baseUrl}/plantae/${name.toUpperCase()}`;
    let obsTracks = this.http.get(url);
    console.log(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getFungi() {
    const url = `${this.baseUrl}/fungi`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getNameFungi(name: string) {
    const url = `${this.baseUrl}/fungi/${name.toUpperCase()}`;
    let obsTracks = this.http.get(url);
    console.log(url);
    console.log(obsTracks);
    return obsTracks;
  }

}
