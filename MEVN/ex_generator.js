const ll = console.log;
function* fn() {
  ll(1);
  yield "1번째 stop";
  ll(2);
  ll(3);
  yield "2번째 stop";
  return "finished"; // true 반환
  yield "3번째 stop";
}
const a = fn();

ll(a.next()); //{ value: '1번째 stop', done: false }
ll(a.next()); //{ value: '2번째 stop', done: false }
ll(a.next()); //{ value: 'finished', done: true }
ll(a.next()); //{ value: undefined, done: true }
ll(a.next()); // return 이후는 종료되어 반환 없음
// generator 함수는 next()를 통해 다음 yield 까지 진행되고
// return에 의해 종료된다

// value 추출
ll([...fn()]); // [ '1번째 stop', '2번째 stop' ]
