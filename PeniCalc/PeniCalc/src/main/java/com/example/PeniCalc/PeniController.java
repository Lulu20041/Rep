package com.example.PeniCalc;

import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Peni")
public class PeniController {

    @GetMapping("/")
    public String getPage() {
        return "index";
    }
    /*
    @PostMapping("/")
    public String pageSubmit(@Valid PeniForm peniForm, Model model, BindingResult bindingResult) {

    } */
}
