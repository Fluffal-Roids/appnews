import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private newsServise:NewsService) {}
ngOnInit() {
this.newsServise.getTopHeadlines().subscribe(resp=>{
  console.log(resp);
})
  
}


}
