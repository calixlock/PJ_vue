const ll = console.log;

// 일반적인 map 적용
const add = (a) => a + 10;
const a = [1, 2, 3];
// ret = return
const ret = a.map(add);
ll(`일반적인 map 적용 : ${ret}`);

// generator 적용
function* map2(f, list) {
  for (const a of list) {
    yield f(a);
  }
}
const add2 = (i) => i + 20;
const b = [1, 2, 3];
ret2 = map2(add2, b);
ll(`ret2 : ${ret2}`);
ll(`[...ret2] : ${[...ret2]}`);
