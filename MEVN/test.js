console.log("test.js실행 되었습니다. package.json/scripts test중입니다");
// function test
const f1 = (e, idx) => console.log(`idx : ${idx} / e : ${e}, this: ${this}`);
// const f2 = (n1, n2, n3, n4) => {
//   console.log(`n1 : ${n1}, n2 : ${n2}, n3 : ${n3}, n4 : ${n4}`);
//   return n1 + n2;
// };
const f2 = (n1) => {
  // console.log(`n1 : ${n1}`);
  return n1;
};
lit_a1 = [1, 2, 3, 4, 5];
let b1 = lit_a1.forEach(f1);
let b2 = lit_a1.map(f2); // params (value,idx,lit_a)
let b3 = lit_a1.reduce((a, b) => a + b);
let b4 = lit_a1.filter((i) => i % 2); // 참인것만 남긴다

//----------------------------------------------------------------
//result return > boolean >
// some : 1개의 조건만 만족해도 true
// every : 모든조건만족

//----------------------------------------------------------------
//find(조건) > value / 없을시 undefined
// findIndex(조건) > idx / 없을시 -1
// includes(조건) > boolean
// idexOf(idx) > value / 없을시 -1
// ----------------------------------------------------------------
// 구문생략
let name = "kim";
let age = 20;
let user1 = { name, age };
console.log(user1);
// spread
let c1 = [1, 2, 3, 4];
let c2 = [0, 0, 0, ...c1];
// -----
