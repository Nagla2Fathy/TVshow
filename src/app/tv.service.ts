import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class TvService {
//   apiKey = '0c3547b1c1c7a21fc554b617bff38eb2'
//   language: string = '';
//   constructor(private http:HttpClient) { }
//   gettv(pageNumber:number=1):Observable<any>{

//     return this.http.get
//     (`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`);
// }

// getTvtId( tvtId:number):Observable<any> {

//   return  this.http.get
// (` https://api.themoviedb.org/3/tv/${tvtId}?api_key=${this.apiKey}&language=${this.language} `)

// }

// searchAllServies(tvName:string,pageNumber:number=1) :Observable<any>
// {
//   if(tvName=='')
//   {
//     return this.gettv()
//   }
//   else
//   {
//     return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${tvName}&language=${this.language}&page=${pageNumber}`)

//   }
// }
// changeLanguage() {
//   this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';
//   return this.language;
// }
// }
export class  TvService{
  apiKey = '49560ad2a12709cba7c0bd0903b19313';
  language: string = 'en-Us';
  constructor(private http: HttpClient) {}


  getAlltvShow(pageNumber:number=1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  gettvById(tvID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${tvID}?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  searchAllMovies(tvName: string,pageNumber:number=1): Observable<any> {
    if (tvName == '') {
      return this.getAlltvShow();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${tvName}&page=${pageNumber}`
      );
    }
  }
  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';

    return this.language;
  }
}


