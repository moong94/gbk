package com.gbk1021.gbk.common;

public interface ResponseCode {
    
    //성공
    public static final String SUCCESS = "SU";

    //존재하지 않는 유저(HTTP Status 400)
    public static final String NOT_EXISTED_USER = "NU";

    //존재하지 않는 게시물(HTTP Status 400)
    public static final String NOT_EXISTED_BOARD = "NB";

    //로그인 실패(HTTP Status 401)
    public static final String SIGN_IN_FAIL = "SF";

    //권한없음(HTTP Status 403)
    public static final String NO_PERMISSION = "NP";

    //데이터베이스 에러(HTTP Status 500)
    public static final String DATABASE_ERROR = "DE";
    
}
