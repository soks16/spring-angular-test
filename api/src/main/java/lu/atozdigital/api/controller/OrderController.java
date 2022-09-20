package lu.atozdigital.api.controller;


import lu.atozdigital.api.model.Order;

import lu.atozdigital.api.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Random;

@CrossOrigin("http://localhost:4200")
@RestController
public class OrderController {

    private final String LETTERS = "abcdefghijklmnopqrstuvwxyz";
    private final char[] ALPHANUMERIC = (LETTERS.toUpperCase()+"0123456789").toCharArray();
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("orders")
    public List<Order> getAllOrder(){

        return this.orderRepository.findAll();
    }


    //enregistrer order
    @PostMapping("orders")
    public Order createOrder(@RequestBody Order order){

        //order.setReference("PA"+order.getID()+"PTYXH");

        StringBuilder result = new StringBuilder();
        for (int i =0; i< ALPHANUMERIC.length; i++){
            result.append(ALPHANUMERIC[new Random().nextInt(ALPHANUMERIC.length)]);
        }
        order.setReference(String.valueOf(result).substring(0,10));
        return this.orderRepository.save(order);
    }

    //modifier article
    @PutMapping("/orders/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable(value = "id") Long orderId, @Validated @RequestBody Order orderDetails){
        Order order = orderRepository.findById(orderId)
                .orElseThrow(()-> new ResourceAccessException("order introuvable pour cet identifiant :: "+ orderId));
        order.setReference(orderDetails.getReference());
        order.setDate(orderDetails.getDate());
        return  ResponseEntity.ok(this.orderRepository.save(order));
    }


}
