package com.gbk1021.gbk.controller;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gbk1021.gbk.service.GbkFutureService;

@RestController
public class GbkFutureController {
    private final GbkFutureService gbkFutureService;
    
    public GbkFutureController(GbkFutureService gbkFutureService) {
        this.gbkFutureService = gbkFutureService;
    }

    @RequestMapping("/future/result")
    public Map<String, Object> gbkFutureResult(@RequestBody Map<String, Object> gbkFutureData){
        return gbkFutureService.gbkFutureResult(gbkFutureData);
    }
}
