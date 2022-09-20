import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from '../class/articles';
import { ArticlesService } from '../service/articles.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  article: Articles = new Articles();

  constructor(private articleService:ArticlesService, private router:Router) { }

  ngOnInit(): void {
  }

  saveArticle(){
    this.articleService.createArticle(this.article).subscribe(data=>{
      this.goToArticleList();
    },
    error => console.log(error)
    );
  }

  goToArticleList(){
    this.router.navigate(['/articles']);
  }

  onSubmit(){
    this.saveArticle();
  }
}
