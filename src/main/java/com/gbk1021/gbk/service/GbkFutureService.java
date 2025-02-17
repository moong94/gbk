package com.gbk1021.gbk.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.gbk1021.gbk.mapper.GbkFutureMapper;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class GbkFutureService {

    private final GbkFutureMapper gbkFutureMapper;

        public GbkFutureService(GbkFutureMapper gbkFutureMapper) {
        this.gbkFutureMapper = gbkFutureMapper;
    }

    @Transactional
    public Map<String, Object> gbkFutureResult(Map<String,Object> gbkFutureData) {
        Map<String, Object> gbkFuterResult = gbkFutureMapper.getGbkFutureResult(gbkFutureData);
        return gbkFuterResult;
    }
    
}
