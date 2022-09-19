package lu.atozdigital.api.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orderDto")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long ID;
    private String reference;
    private Date date;

    public Order(){
        super();
    }

    public Order(String reference, Date date) {
        this.reference = reference;
        this.date = date;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getRef() {
        return reference;
    }

    public void setRef(String ref) {
        this.reference = ref;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
