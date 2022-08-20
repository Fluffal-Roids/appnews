import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:httpclient) { }

  getTopHeadlines(){
   retun this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c7f709dda4404eba9ae5cfb7453634e0')
  }
}
