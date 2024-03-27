### Generator 제너레이터

> 함수이름 `function* func_name()`
> 이터레이터를 만들고 spread연산자 , for of등을 통해 return, yield로 value를 활용할 수 있는 이터러블한 객체를 반환할 수 있는 함수

#### 이터레이터

- `{value:'values' , done:true/false}` 객체를 반환하는 next() 메서드를 가진 값
- 이터러블의 요소를 순회하기 위해 존재하는 하나의 포인터

#### 이터러블

- 이터레이터를 반환하는 `[Symbol.iterator]()`라는 키를 가진 값.
- 반복할 수 있는 순차적이고 순회적인 객체

#### 이터러블/이터레이터 프로토콜

- `for of` `spread`연산자, 구조분해 할당을 통해 동작 할 수 있는 약속 / 이터레이터 프로토콜은 `next()`메서드를 통해 다음 로직으로 갈 수 있음

#### 참고

- https://www.youtube.com/watch?v=qi24UqyJLgs

> iterable
>
> - Symbol.iterator 메서드가 있다.
> - Symbol.iterator 는 iterator 를 반환해야 한다.

> iterator
>
> - next 메서드를 가진다.
> - next 메서드는 value 와 done 속성을 가진 객체를 반환한다.
> - 작업이 끝나면 done 은 true 가 된다.
