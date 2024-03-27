// ES모듈(import)
//  package.json에 {"type": "module"}, 추가
// 확장자 `.js`

const cl = console.log;
// import a, { s1, s2 } from "./a.js";
// ll(a);
// ll(`s1:${s1} s2:${s2}`);
// import { s1, s2, s3 } from "./a.js";
// ll(`s1,s2,s3 : ${s1}, ${s2}, ${s3}`);

import { b, c } from "./a.js";
cl(b, c);
