enum ResponseCode {
    //성공
    SUCCESS = "SU",

    //존재하지 않는 유저(HTTP Status 400)
    NOT_EXISTED_USER = "NU",

    //존재하지 않는 게시물(HTTP Status 400)
    NOT_EXISTED_BOARD = "NB",

    //로그인 실패(HTTP Status 401)
    SIGN_IN_FAIL = "SF",

    //권한없음(HTTP Status 403)
    NO_PERMISSION = "NP",

    //데이터베이스 에러(HTTP Status 500)
    DATABASE_ERROR = "DE",
}

export default ResponseCode;