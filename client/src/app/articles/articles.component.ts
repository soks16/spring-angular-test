import { Component, OnInit } from '@angular/core';
import { Articles } from '../class/articles';
import { ArticlesService } from '../service/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles!: Articles[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(){
    this.articleService.getArticlesList().subscribe(data =>{
      this.articles = data;
    });
  }

}
