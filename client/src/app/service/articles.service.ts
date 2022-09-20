import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../class/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl = "http://localhost:8080/articles";
  constructor(private httpClient:HttpClient) { }

  createArticle(article: Articles): Observable<Object>{
    return this.httpClient.post('${this.baseUrl}', article);
  }
}
