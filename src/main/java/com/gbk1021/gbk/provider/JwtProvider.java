package com.gbk1021.gbk.provider;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtProvider{

    @Value("${secret-key}")
    private String secretKey;

    //jwt생성(Json이므로 일반적으로 String 반환) 후 반환 메소드
    public String create(String random_ip){
        //만료기간(1시간짜리)
        Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));

        Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));

        //JWT 생성
        String jwt = Jwts.builder()
            .signWith(key, SignatureAlgorithm.HS256) //HS256알고리즘 사용
            .setSubject(random_ip).setIssuedAt(new Date()).setExpiration(expiredDate) //생성시간(현재시간), 만료시간
            .compact();

        return jwt;
    }

    //jwt토큰을 받은 후 검증하여 페이로드에 있는 subject를 꺼내주는 메소드
    public String validate(String jwt){
        Claims claims = null;
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));

        try {
            claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jwt)
                .getBody();
        } catch (Exception exception) {
            exception.printStackTrace();

            return null;
        }

        return claims.getSubject();
    }
}