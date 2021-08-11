## What I learned Today

1. Including account information in header of a request
This is a way you must not do, a hacker can sanp http request and hack personal information of users.

2. session / cookie

    2-1 Authentication  
        1) Users login  
        2) Server reads account information, saves the ID value in session storage after investing unique ID value, and saves the session ID in cookie, when authorisation is needed, sends the cookie the server made in the header as request arrives.<br>
        3) Take cookie from the server, compare the data to the sesstion storage. Then take correct data.  
        4) The authorisation is completed and the server sends corresponding data to the user's request.

    2.2 차이점  
        1) 세션: 서버에서 가지고 있는 정보  
        2) 쿠키: 서버에서 발급된 세션을 열기위한 키 값(=세션ID)  
    2.3 장단점  
        1) 장점: 고유의 ID값을 받아 안전하다.  
        2) 단점: 서버에 세션 저장소로 인한 부하가 올라간다.  

3. Token 기반 인증 방식
인증에 필요한 정보들을 암호화시킨 access token을 HTTP 헤더에 실어 서버로 보내게 된다.

4. JWT Token 구성요소
    1) header: 암호화할 방식, 타입을 포함  
    2) payload: 서버에서 보낼 데이터 >> 일반적으로 유효기간을 포함한 user의 id 값  
    3) verify signature: Base64로 인코딩한 header와 payload, secret key  

    4-1 인증절차  
        1) 사용자가 로그인  
        2) 서버에서 계정 정보를 통해 사용자를 확인한 후 고유 ID값을 부여하고 payload에 넣는다.  
        3) token의 유효기간을 설정  
        4) secret key를 활용해 access token을 발급  
        5) 사용자는 발급된 token을 저장하고 인증이 필요할 때마다 header에 실어 보낸다.  
        6) 서버에서 client로부터 받은 token의 secret key를 복호화해 확인  
        7) 검증완료 시, payload를 decoding하여 사용자에 맞는 데이터를 가져온다.  
    4.2 장단점  
        1) 장점: 간편하고 token 발급 후 검증만 하면 되므로 추가 저장소가 필요없다.  
        2) 단점: 한 번 발급된 token은 되돌릴 수 없고 만약 해커에 의해 탈취되면 유효기간까지 계속 사용가능하다 >> 해결방법: 유효기간을 짧게 설정하고 refresh token이라는 새로운 토큰을 발급한다.  

5. 두 방식의 차이점  
    세션/쿠키는 세션 저장소에 유저의 정보를 보관, JWT는 token 안에 유저의 정보를 보관한다.  
    클라이언트 입장에서는 동일하나 서버 입장에서는 인증을 위한 암호화를 하느냐, 별도의 저장소를 사용하냐는 차이가 있다.  
