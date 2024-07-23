package main.java.com.gbk1021.gbk.filter;

import java.io.IOException;
import org.springframework.util.StringUtils;

import main.java.com.gbk1021.gbk.provider.JwtProvider;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter{
    private final JwtProvider jwtProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {
            String token = parseBearerToken(request);
        
            //검증 실패한 경우
            if(token == null){
                //다음 필터로 넘기기
                filterChain.doFilter(request, response);            
                return;
            }
    
            //토큰에서 random_ip 뽑아오기
            String random_ip = jwtProvider.validate(token);
    
            //random_ip가 null이라면
            if(random_ip == null){
                //다음 필터로 넘기기
                filterChain.doFilter(request, response);
                return;
            }
            
            //객체 생성을 통해 randomip, 권한 넘기기(비밀번호는 사용X)
            //이후 웹인증 세부정보소스를 통해 디테일 정보 구축
            AbstractAuthenticationToken authenticationToken =
                new UserrandomIpPasswordAuthenticationToken(random_ip, null, AuthorityUtils.NO_AUTHORITIES);
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
    
            //비어있는 context 생성
            SecurityContext securityContext = SEcurityContextHolder.createEmptyContext();
    
            //해당 context에 authenticiationToken 추가
            securityContext.setAuthentication(authenticationToken);
    
            //외부에서 사용할 수 있도록 holder에 담아주기
            SecurityContextHolder.setContext(securityContext);
    
        } catch (Exception exception) {
            exception.printStackTrace();
        }

        //다음 필터로 넘기기
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