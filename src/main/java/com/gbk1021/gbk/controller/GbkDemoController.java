package com.gbk1021.gbk.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GbkDemoController {
    
    @RequestMapping("/api/test")
    public String demo() {
        return "GoodBye-Korea 프로젝트 시작2";
    }
}
