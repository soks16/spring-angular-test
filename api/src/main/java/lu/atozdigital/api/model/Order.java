package lu.atozdigital.api.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orderDto")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long ID;
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String reference;

    @OneToMany
    private List<Article> articleList;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date date;

    @PrePersist
    private void onCreate() {
        date = new Date();
    }

    public Order(){
        super();
    }

    public Order(String reference, List<Article> articleList, Date date) {
        super();
        this.reference = reference;
        this.articleList = articleList;
        this.date = date;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getReference() {
        return reference;
    }
    public void setReference(String reference) {
        this.reference = reference;
    }
    public List<Article> getArticleList() {
        return articleList;
    }
    public void setArticleList(List<Article> articleList) {
        this.articleList = articleList;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
