package lu.atozdigital.api.controller;


import lu.atozdigital.api.model.Article;
import lu.atozdigital.api.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class ArticleController {
    @Autowired
    private ArticleRepository articleRepository;

    //voir tout les articles
    @GetMapping("/articles")
    public List<Article> getAllArticle(){
        return this.articleRepository.findAll();
    }

    //voir un seul article
    @GetMapping("/articles/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable(value = "id") Long articleId) throws ResourceAccessException {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(()-> new ResourceAccessException("article introuvable pour cet identifiant :: "+ articleId));
        return ResponseEntity.ok().body(article);
    }

    //create article rest api
    @PostMapping("/articles")
    public Article createArticle(@RequestBody Article article){
        return articleRepository.save(article);
    }






    /*
    //modifier article
    @PutMapping("/articles/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable(value = "id") Long articleId, @Validated @RequestBody Article articleDetails){
            Article article = articleRepository.findById(articleId)
                .orElseThrow(()-> new ResourceAccessException("article introuvable pour cet identifiant :: "+ articleId));
        article.setName(articleDetails.getName());
        article.setPrice(articleDetails.getPrice());
        article.setPicture(articleDetails.getPicture());
        return  ResponseEntity.ok(this.articleRepository.save(article));
    }

    //supprimer article
    @DeleteMapping("/articles/{id}")
    public Map<String, Boolean> deleteArticle(@PathVariable(value = "id") Long articleId){
        Article article = articleRepository.findById(articleId)
                .orElseThrow(()-> new ResourceAccessException("article introuvable pour cet identifiant :: "+ articleId));
        this.articleRepository.delete(article);

        Map<String, Boolean> response = new HashMap<>();
        response.put("supprimé", Boolean.TRUE);
        return response;
    }


     */
}
