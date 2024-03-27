// commonJs require로 모듈을 가져오기 위해서는
// 확장자를 `.cjs`로

const t = require("./a2.cjs");
console.log(t.sayFunc("b2체크"));
console.log("------");
console.log(`t.value: ${t.value}`);
