package com.gbk1021.gbk.filter;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.gbk1021.gbk.provider.JwtProvider;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter{
    private final JwtProvider jwtProvider;
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

                try {
                    String token = parseBearerToken(request);

                    //토큰 값이 null이면 다음 필터로 넘긴 후 return;
                    if(token == null){
                        filterChain.doFilter(request, response);
                        return;
                    }
                    
                    //가져온 토큰을 JwtProvider에 있는 validate메소드를 통해 검증
                    String random_ip = jwtProvider.validate(token);

                    //randomIp가 null이라면 다음 필터로 넘긴 후 return;
                    if(random_ip == null){
                        filterChain.doFilter(request, response);
                        return;
                    }


                    //위 두 검증 작업을 지나면
                } catch (Exception exception) {
                    exception.printStackTrace();
                }

                //다음 필터로 넘어가기
                filterChain.doFilter(request, response);
    }

  

    /*request에서 헤더를 가져온 후 그 헤더의 Authorization key를 찾은 후
      Bearer인증인지 확인하는 메소드*/
    private String parseBearerToken(HttpServletRequest request){
        String authorization = request.getHeader("Authorization");

        //authorization 필드를 가지고있는지 확인
        boolean hasAuthorization = StringUtils.hasText(authorization);
        if(!hasAuthorization) { //가지고있지 않다면 null 반환
            return null;
        }

        //Bearer가 맞는지 확인
        boolean isBearer = authorization.startsWith("Bearer ");
        if(!isBearer){ //Bearer타입이 아니라면 null 반환
            return null;
        }

        //위 검증을 다 거쳤다면 토큰 생성 후 반환
        String token = authorization.substring(7);

        return token;
    }
}