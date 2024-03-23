package com.gbk1021.gbk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GbkDemoController {
    
    @RequestMapping("/")
    public String index() {
        return "GoodBye-Korea 프로젝트 시작";
    }
}
