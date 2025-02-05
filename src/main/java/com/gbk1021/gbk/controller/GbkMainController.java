package com.gbk1021.gbk.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class GbkMainController {
    
    @RequestMapping(value = "/")
    public String gbkMain() {
        log.debug("============Main 페이지===========");
        return "GBKmain페이지";
    }
}
