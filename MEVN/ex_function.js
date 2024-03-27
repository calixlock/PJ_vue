let a = ["a", "b", "c", "d", "e", "f"];
const cl = console.log;
// cl(a.includes("d"));
// cl(a.includes("z"));
// cl(a.indexOf("c"));
// cl(a.indexOf("z"));
cl("----------------------------------------------------------------");
// includes => more speed faster
//JSON.parse(obj) > 문자를 객체화
//JSON.stringify(obj) > 객체를 문자열화
//JSON.stringify(obj_value,replacer_function,space)
//replacer_function 없을시 null
// 깊은 복사 / 원본객체 안전하게 복사
// let txt = JSON.parse(JSON.stringify(obj));
let json_string = '{"name": "kim", "area": "seoul"}';
let json_Obj = JSON.parse(json_string);

// json 객체 > 문자열화
let json_Obj2 = { name: "na", area: "japan" };
let json_string2 = JSON.stringify(json_Obj2);

// cl(`json_Obj : ${json_Obj}`);
// cl(json_Obj["name"]);
// cl(json_Obj["area"]);
// cl(json_string2);

// json_Obj2.name = "two";
// cl(json_Obj2["name"]);
// cl(JSON.stringify(json_Obj2));
// json_Obj2["name"] = "three";
// cl(JSON.stringify(json_Obj2));

//--------------------------------------------
// 모나드 함수
const func_a = (i) => i + 10;
const monadic_b = [1, 2, 3].map(func_a);
cl(monadic_b);
