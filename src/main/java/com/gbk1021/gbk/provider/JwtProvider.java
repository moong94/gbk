package main.java.com.gbk1021.gbk.provider;

import java.util.Date;

@Component
public class JwtProvider{
    private String secretKey = "S3cr3tK3y";

    //jwt생성(Json이므로 일반적으로 String 반환) 후 반환 메소드
    public String create(String random_ip){
        //만료기간(1시간짜리)
        Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.Hours));

        //JWT 생성
        String jwt = Jwts.builder()
            .signWith(SignatureAlgorithm.HS256, secretKey) //HS256알고리즘 사용
            .setSubject(random_ip).setIssuedAt(new Date()).setExpiration(expiredDate) //생성시간(현재시간), 만료시간
            .compact();

        return jwt;
    }

    //jwt토큰을 받은 후 검증하여 페이로드에 있는 subject를 꺼내주는 메소드
    public String validate(String jwt){
        Claims claims = null;

        try {
            claims = Jwts.parser().setSigningKey(secretKey)
                .parseClaimsJws(jwt).getBody();
        } catch (Exception exception) {
            exception.printStackTrace();

            return null;
        }

        return claims.getSubject();
    }
}