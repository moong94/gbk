package com.gbk1021.gbk.common;

public interface ResponseMessage {

    //성공
    public static final String SUCCESS = "Success.";

    //존재하지 않는 유저(HTTP Status 400)
    public static final String NOT_EXISTED_USER = "No Existed User.";

    //존재하지 않는 게시물(HTTP Status 400)
    public static final String NOT_EXISTED_BOARD = "No Existed Board.";

    //로그인 실패(HTTP Status 401)
    public static final String SIGN_IN_FAIL = "Sign In Failed.";

    //권한없음(HTTP Status 403)
    public static final String NO_PERMISSION = "No Permission.";

    //데이터베이스 에러(HTTP Status 500)
    public static final String DATABASE_ERROR = "Databae Error.";

}
