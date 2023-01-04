package com.example.PeniCalc;


import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;

import java.util.Date;

public class PeniForm {

    @NotNull
    @PastOrPresent
    private Date taxDate;

    @NotNull
    @Min(0)
    private int taxSum;

    @NotNull
    @PastOrPresent
    private Date peniDate;

}
