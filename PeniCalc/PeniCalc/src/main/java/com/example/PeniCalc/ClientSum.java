package com.example.PeniCalc;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PastOrPresent;

import java.util.Date;

@Entity
@Table(name = "clientSum")
public class ClientSum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @PastOrPresent
    private Date date;

    @Min(0)
    private double sum;

    private String currency;

}
