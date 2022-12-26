package com.example.logisticsCalculator;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class CalculatorController {

    @GetMapping("/")
    public String calculator(Model model) {
        try {
            return "index";
        }
        catch (Exception ex) {
            return (ex.getMessage());
        }
    }
    @PostMapping("/calculate")
    public String getData() {
        return null;
    }

}
