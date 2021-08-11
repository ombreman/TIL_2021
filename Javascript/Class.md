## Class

It's one of functions in Javascript.
<script>
alert(typeof User); // function
</script>

### What the class `User` does?
1. It makes a User function,
2. Main content of the function is from method `constructor` method.
3. It will conduct a function as empty if it does not have a `constructor` method.
4. The decided method will be saved in `User.prototype` sayHi for instance.

User라는 이름을 가진 함수를 만듭니다. 함수 본문은 생성자 메서드 constructor에서 가져옵니다. 생성자 메서드가 없으면 본문이 비워진 채로 함수가 만들어집니다.
sayHi같은 클래스 내에서 정의한 메서드를 User.prototype에 저장합니다.

