const lit = ["kim", "so", "na", "ahn"];
// // iterator 특성여부 확인
// console.log(Symbol.iterator in lit);
// // 연속 출력
// for (let i of lit) console.log(i);

const it = lit[Symbol.iterator]();
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
