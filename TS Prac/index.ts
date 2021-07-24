function 함수(x :number) :number {
    return x * 2
}

type Member = [number, boolean]
let John :Member = [123, true]

let 회원들 :(number | string | number) [] = [1, '2', 3]
let 오브젝트 :{ a : string | number } = { a : 123 }

let 이름 :any // 타입쉴드 해제 >> 아무 type이나 들어올 수 있다.
이름 = 123
이름 = '123'
이름 = true
이름 = []
이름 = {}

let user :string = 'kim';
let age :undefined | number = undefined;
let married :boolean = false; 
let 철수 :( string | number | undefined | boolean )[]= [user, age, married];

let 학교 : {
    score : ( number | boolean )[],
    teacher : string,
    friend : string | string[]
}

= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]