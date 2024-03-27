### json 타입

- `string` `boolean` `array` `object` `null` `number`

- json 직렬화
  - 외부의 시스템에서도 사용할 수 있도록 byte형태로 데이터 변환하는 기술
  - json Object를 json형태를 가진 문자열로 변환
  - 역직렬화
    - 문자열 > json Object로 변환

```json
{
  "name": "kim",
  "area": "seoul",
  "number": 82
}
```

### json parse / json stringify

```js
// json 문자열 > 객체화
let json_string = '{"name": "kim", "area": "seoul"}';
let json_Obj = JSON.parse(json_string);

// json 객체 > 문자열화
let json_Obj2 = { name: "kim", area: "seoul" };
let json_string2 = JSON.stringify(json_Obj2);
console.log(json_string2); //{"name": "kim", "area": "seoul"}

// value 접근
json_Obj2.name = "two";
cl(JSON.stringify(json_Obj2));

json_Obj2["name"] = "three";
cl(JSON.stringify(json_Obj2));
```

---

### js 원시타입

```js
// boolean
let boolean1 = true;
let boolean2 = false;
// null
let null = null;
// undefined
let undefined = undefined;
//Number
let num1 = 1;
//String
let string1 ="string1";
// character
let char1 = 'a'
//Symbol.

```

#### symbol type

- JavaScript의 Symbol은 원시 데이터 타입 중 하나로
- 고유하고 변경할 수 없는 값을 나타냅니다.
  - 주로 객체의 프로퍼티 키로 사용되며,
  - 해당 키는 다른 모든 키와 겹치지 않습니다
